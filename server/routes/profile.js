const express = require('express');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const { profileUpdateSchema, validate } = require('../utils/validation');
const { getConnection } = require('../config/database');

const router = express.Router();

// Get public profile by username
router.get('/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const pool = getConnection();

    // Get user profile
    const [users] = await pool.execute(
      'SELECT id, username, bio, profile_image, theme, template FROM users WHERE username = ?',
      [username]
    );

    if (users.length === 0) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    const user = users[0];

    // Get user's social links
    const [links] = await pool.execute(
      'SELECT id, platform_name, url, icon FROM social_links WHERE user_id = ? ORDER BY created_at ASC',
      [user.id]
    );

    // Record visit
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');
    
    await pool.execute(
      'INSERT INTO visits (user_id, ip_address, user_agent) VALUES (?, ?, ?)',
      [user.id, ipAddress, userAgent]
    );

    res.json({
      profile: {
        ...user,
        links
      }
    });

  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: 'Failed to get profile' });
  }
});

// Update profile (protected route)
router.put('/', auth, validate(profileUpdateSchema), async (req, res) => {
  try {
    const { username, bio, theme, template } = req.validatedData;
    const userId = req.user.id;
    const pool = getConnection();

    // Check if username is already taken (if username is being updated)
    if (username && username !== req.user.username) {
      const [existingUsers] = await pool.execute(
        'SELECT id FROM users WHERE username = ? AND id != ?',
        [username, userId]
      );

      if (existingUsers.length > 0) {
        return res.status(400).json({ error: 'Username already taken' });
      }
    }

    // Build update query dynamically
    const updateFields = [];
    const updateValues = [];

    if (username !== undefined) {
      updateFields.push('username = ?');
      updateValues.push(username);
    }
    if (bio !== undefined) {
      updateFields.push('bio = ?');
      updateValues.push(bio);
    }
    if (theme !== undefined) {
      updateFields.push('theme = ?');
      updateValues.push(theme);
    }
    if (template !== undefined) {
      updateFields.push('template = ?');
      updateValues.push(template);
    }

    if (updateFields.length === 0) {
      return res.status(400).json({ error: 'No fields to update' });
    }

    updateValues.push(userId);

    // Update user profile
    await pool.execute(
      `UPDATE users SET ${updateFields.join(', ')} WHERE id = ?`,
      updateValues
    );

    // Get updated user data
    const [users] = await pool.execute(
      'SELECT id, username, email, bio, profile_image, theme, template FROM users WHERE id = ?',
      [userId]
    );

    res.json({
      message: 'Profile updated successfully',
      user: users[0]
    });

  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

// Upload profile image (protected route)
router.post('/upload-image', auth, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const userId = req.user.id;
    const imageUrl = `/uploads/${req.file.filename}`;
    const pool = getConnection();

    // Update user's profile image
    await pool.execute(
      'UPDATE users SET profile_image = ? WHERE id = ?',
      [imageUrl, userId]
    );

    res.json({
      message: 'Profile image uploaded successfully',
      imageUrl
    });

  } catch (error) {
    console.error('Upload image error:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

module.exports = router; 