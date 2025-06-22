const express = require('express');
const auth = require('../middleware/auth');
const { getConnection } = require('../config/database');

const router = express.Router();

// Get visit analytics for user (protected route)
router.get('/:username', auth, async (req, res) => {
  try {
    const { username } = req.params;
    const userId = req.user.id;
    const pool = getConnection();

    // Verify the username belongs to the authenticated user
    const [users] = await pool.execute(
      'SELECT id FROM users WHERE username = ? AND id = ?',
      [username, userId]
    );

    if (users.length === 0) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Get total visits
    const [totalVisits] = await pool.execute(
      'SELECT COUNT(*) as total FROM visits WHERE user_id = ?',
      [userId]
    );

    // Get visits by date (last 30 days)
    const [visitsByDate] = await pool.execute(
      `SELECT 
        DATE(visited_at) as date,
        COUNT(*) as count
       FROM visits 
       WHERE user_id = ? 
       AND visited_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
       GROUP BY DATE(visited_at)
       ORDER BY date DESC`,
      [userId]
    );

    // Get unique visitors (by IP)
    const [uniqueVisitors] = await pool.execute(
      'SELECT COUNT(DISTINCT ip_address) as unique_visitors FROM visits WHERE user_id = ?',
      [userId]
    );

    // Get recent visits
    const [recentVisits] = await pool.execute(
      `SELECT 
        ip_address,
        user_agent,
        visited_at
       FROM visits 
       WHERE user_id = ? 
       ORDER BY visited_at DESC 
       LIMIT 10`,
      [userId]
    );

    res.json({
      analytics: {
        totalVisits: totalVisits[0].total,
        uniqueVisitors: uniqueVisitors[0].unique_visitors,
        visitsByDate,
        recentVisits
      }
    });

  } catch (error) {
    console.error('Get analytics error:', error);
    res.status(500).json({ error: 'Failed to get analytics' });
  }
});

// Get link click analytics (protected route)
router.get('/:username/links', auth, async (req, res) => {
  try {
    const { username } = req.params;
    const userId = req.user.id;
    const pool = getConnection();

    // Verify the username belongs to the authenticated user
    const [users] = await pool.execute(
      'SELECT id FROM users WHERE username = ? AND id = ?',
      [username, userId]
    );

    if (users.length === 0) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Get user's links with click counts
    const [links] = await pool.execute(
      `SELECT 
        sl.id,
        sl.platform_name,
        sl.url,
        sl.icon,
        COUNT(v.id) as click_count
       FROM social_links sl
       LEFT JOIN visits v ON sl.id = v.link_id
       WHERE sl.user_id = ?
       GROUP BY sl.id
       ORDER BY click_count DESC`,
      [userId]
    );

    res.json({ links });

  } catch (error) {
    console.error('Get link analytics error:', error);
    res.status(500).json({ error: 'Failed to get link analytics' });
  }
});

module.exports = router; 