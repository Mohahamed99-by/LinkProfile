const express = require('express');
const auth = require('../middleware/auth');
const { socialLinkSchema, validate } = require('../utils/validation');
const { getConnection } = require('../config/database');

const router = express.Router();

// Get user's social links (protected route)
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const pool = getConnection();

    const [links] = await pool.execute(
      'SELECT id, platform_name, url, icon FROM social_links WHERE user_id = ? ORDER BY created_at ASC',
      [userId]
    );

    res.json({ links });

  } catch (error) {
    console.error('Get links error:', error);
    res.status(500).json({ error: 'Failed to get links' });
  }
});

// Add new social link (protected route)
router.post('/', auth, validate(socialLinkSchema), async (req, res) => {
  try {
    const { platform_name, url, icon } = req.validatedData;
    const userId = req.user.id;
    const pool = getConnection();

    // Check if user already has this platform
    const [existingLinks] = await pool.execute(
      'SELECT id FROM social_links WHERE user_id = ? AND platform_name = ?',
      [userId, platform_name]
    );

    if (existingLinks.length > 0) {
      return res.status(400).json({ 
        error: `You already have a ${platform_name} link` 
      });
    }

    // Insert new link
    const [result] = await pool.execute(
      'INSERT INTO social_links (user_id, platform_name, url, icon) VALUES (?, ?, ?, ?)',
      [userId, platform_name, url, icon]
    );

    // Get the created link
    const [links] = await pool.execute(
      'SELECT id, platform_name, url, icon FROM social_links WHERE id = ?',
      [result.insertId]
    );

    res.status(201).json({
      message: 'Link added successfully',
      link: links[0]
    });

  } catch (error) {
    console.error('Add link error:', error);
    res.status(500).json({ error: 'Failed to add link' });
  }
});

// Update social link (protected route)
router.put('/:id', auth, validate(socialLinkSchema), async (req, res) => {
  try {
    const { id } = req.params;
    const { platform_name, url, icon } = req.validatedData;
    const userId = req.user.id;
    const pool = getConnection();

    // Check if link exists and belongs to user
    const [existingLinks] = await pool.execute(
      'SELECT id FROM social_links WHERE id = ? AND user_id = ?',
      [id, userId]
    );

    if (existingLinks.length === 0) {
      return res.status(404).json({ error: 'Link not found' });
    }

    // Check if platform name is already taken by another link
    const [duplicateLinks] = await pool.execute(
      'SELECT id FROM social_links WHERE user_id = ? AND platform_name = ? AND id != ?',
      [userId, platform_name, id]
    );

    if (duplicateLinks.length > 0) {
      return res.status(400).json({ 
        error: `You already have a ${platform_name} link` 
      });
    }

    // Update link
    await pool.execute(
      'UPDATE social_links SET platform_name = ?, url = ?, icon = ? WHERE id = ? AND user_id = ?',
      [platform_name, url, icon, id, userId]
    );

    // Get updated link
    const [links] = await pool.execute(
      'SELECT id, platform_name, url, icon FROM social_links WHERE id = ?',
      [id]
    );

    res.json({
      message: 'Link updated successfully',
      link: links[0]
    });

  } catch (error) {
    console.error('Update link error:', error);
    res.status(500).json({ error: 'Failed to update link' });
  }
});

// Delete social link (protected route)
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const pool = getConnection();

    // Check if link exists and belongs to user
    const [existingLinks] = await pool.execute(
      'SELECT id FROM social_links WHERE id = ? AND user_id = ?',
      [id, userId]
    );

    if (existingLinks.length === 0) {
      return res.status(404).json({ error: 'Link not found' });
    }

    // Delete link
    await pool.execute(
      'DELETE FROM social_links WHERE id = ? AND user_id = ?',
      [id, userId]
    );

    res.json({ message: 'Link deleted successfully' });

  } catch (error) {
    console.error('Delete link error:', error);
    res.status(500).json({ error: 'Failed to delete link' });
  }
});

// Get available platforms from database
router.get('/platforms', async (req, res) => {
  try {
    const pool = getConnection();
    
    const [platforms] = await pool.execute(
      'SELECT id, name, icon, color FROM platforms ORDER BY name ASC'
    );

    res.json({ platforms });
  } catch (error) {
    console.error('Get platforms error:', error);
    res.status(500).json({ error: 'Failed to get platforms' });
  }
});

module.exports = router; 