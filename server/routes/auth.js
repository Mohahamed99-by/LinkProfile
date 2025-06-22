const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getConnection } = require('../config/database');
const { registerSchema, loginSchema, validate } = require('../utils/validation');

const router = express.Router();

// Register new user
router.post('/register', validate(registerSchema), async (req, res) => {
  try {
    const { username, email, password } = req.validatedData;
    const pool = getConnection();

    // Check if user already exists
    const [existingUsers] = await pool.execute(
      'SELECT id FROM users WHERE email = ? OR username = ?',
      [email, username]
    );

    if (existingUsers.length > 0) {
      return res.status(400).json({
        error: 'User already exists with this email or username'
      });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert new user
    const [result] = await pool.execute(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    // Check JWT_SECRET
    const jwtSecret = process.env.JWT_SECRET || 'fallback_secret_key_for_development';
    console.log('JWT_SECRET loaded:', jwtSecret ? 'YES' : 'NO');

    // Generate JWT token with longer expiration
    const token = jwt.sign(
      { userId: result.insertId },
      jwtSecret,
      { expiresIn: process.env.JWT_EXPIRES_IN || '30d' }
    );

    // Generate refresh token
    const refreshToken = jwt.sign(
      { userId: result.insertId, type: 'refresh' },
      jwtSecret,
      { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '90d' }
    );

    // Get user data (without password)
    const [users] = await pool.execute(
      'SELECT id, username, email, bio, profile_image, theme FROM users WHERE id = ?',
      [result.insertId]
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
      refreshToken,
      user: users[0],
      expiresIn: process.env.JWT_EXPIRES_IN || '30d'
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login user
router.post('/login', validate(loginSchema), async (req, res) => {
  try {
    const { email, password } = req.validatedData;
    const pool = getConnection();

    // Find user by email
    const [users] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = users[0];

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check JWT_SECRET
    const jwtSecret = process.env.JWT_SECRET || 'fallback_secret_key_for_development';
    console.log('JWT_SECRET loaded:', jwtSecret ? 'YES' : 'NO');

    // Generate JWT token with longer expiration
    const token = jwt.sign(
      { userId: user.id },
      jwtSecret,
      { expiresIn: process.env.JWT_EXPIRES_IN || '30d' }
    );

    // Generate refresh token
    const refreshToken = jwt.sign(
      { userId: user.id, type: 'refresh' },
      jwtSecret,
      { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '90d' }
    );

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      message: 'Login successful',
      token,
      refreshToken,
      user: userWithoutPassword,
      expiresIn: process.env.JWT_EXPIRES_IN || '30d'
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});


// Refresh token endpoint
router.post('/refresh', async (req, res) => {
  try {
    const { refreshToken } = req.body;
    
    if (!refreshToken) {
      return res.status(401).json({ error: 'Refresh token required' });
    }

    const jwtSecret = process.env.JWT_SECRET || 'fallback_secret_key_for_development';
    
    // Verify refresh token
    const decoded = jwt.verify(refreshToken, jwtSecret);
    
    if (decoded.type !== 'refresh') {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }

    const pool = getConnection();
    
    // Get user from database
    const [users] = await pool.execute(
      'SELECT id, username, email, bio, profile_image, theme FROM users WHERE id = ?',
      [decoded.userId]
    );

    if (users.length === 0) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Generate new access token
    const newToken = jwt.sign(
      { userId: decoded.userId },
      jwtSecret,
      { expiresIn: process.env.JWT_EXPIRES_IN || '30d' }
    );

    // Generate new refresh token
    const newRefreshToken = jwt.sign(
      { userId: decoded.userId, type: 'refresh' },
      jwtSecret,
      { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '90d' }
    );

    res.json({
      message: 'Token refreshed successfully',
      token: newToken,
      refreshToken: newRefreshToken,
      user: users[0],
      expiresIn: process.env.JWT_EXPIRES_IN || '30d'
    });

  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Invalid or expired refresh token' });
    }
    console.error('Token refresh error:', error);
    res.status(500).json({ error: 'Token refresh failed' });
  }
});

// Get current user (protected route)
router.get('/me', require('../middleware/auth'), async (req, res) => {
  try {
    res.json({ user: req.user });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Failed to get user data' });
  }
});

module.exports = router; 