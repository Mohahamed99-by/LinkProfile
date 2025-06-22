const express = require('express');
const auth = require('../middleware/auth');
const { getConnection } = require('../config/database');

const router = express.Router();

// Get comprehensive dashboard analytics (protected route)
router.get('/dashboard', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const pool = getConnection();

    // Get total profile visits
    const [totalVisits] = await pool.execute(
      'SELECT COUNT(*) as total FROM visits WHERE user_id = ?',
      [userId]
    );

    // Get unique visitors (by IP address)
    const [uniqueVisitors] = await pool.execute(
      'SELECT COUNT(DISTINCT ip_address) as unique_visitors FROM visits WHERE user_id = ?',
      [userId]
    );

    // Get total links count
    const [totalLinks] = await pool.execute(
      'SELECT COUNT(*) as total FROM social_links WHERE user_id = ?',
      [userId]
    );

    // Get visits in the last 30 days
    const [recentVisits] = await pool.execute(
      `SELECT COUNT(*) as recent_visits 
       FROM visits 
       WHERE user_id = ? 
       AND visited_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)`,
      [userId]
    );

    // Get visits in the last 7 days
    const [weeklyVisits] = await pool.execute(
      `SELECT COUNT(*) as weekly_visits 
       FROM visits 
       WHERE user_id = ? 
       AND visited_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)`,
      [userId]
    );

    // Get today's visits
    const [todayVisits] = await pool.execute(
      `SELECT COUNT(*) as today_visits 
       FROM visits 
       WHERE user_id = ? 
       AND DATE(visited_at) = CURDATE()`,
      [userId]
    );

    // Get visits by date for the last 30 days (for chart data)
    const [visitsByDate] = await pool.execute(
      `SELECT 
        DATE(visited_at) as date,
        COUNT(*) as visits
       FROM visits 
       WHERE user_id = ? 
       AND visited_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
       GROUP BY DATE(visited_at)
       ORDER BY date ASC`,
      [userId]
    );

    // Get top platforms by visit count (if we track link clicks)
    const [topPlatforms] = await pool.execute(
      `SELECT 
        sl.platform_name,
        sl.icon,
        COUNT(sl.id) as link_count
       FROM social_links sl
       WHERE sl.user_id = ?
       GROUP BY sl.platform_name, sl.icon
       ORDER BY link_count DESC
       LIMIT 5`,
      [userId]
    );

    // Get recent visits with details
    const [recentVisitDetails] = await pool.execute(
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

    // Get user account creation date
    const [userInfo] = await pool.execute(
      'SELECT created_at FROM users WHERE id = ?',
      [userId]
    );

    // Calculate growth rate (visits this week vs last week)
    const [lastWeekVisits] = await pool.execute(
      `SELECT COUNT(*) as last_week_visits 
       FROM visits 
       WHERE user_id = ? 
       AND visited_at >= DATE_SUB(NOW(), INTERVAL 14 DAY)
       AND visited_at < DATE_SUB(NOW(), INTERVAL 7 DAY)`,
      [userId]
    );

    const currentWeekVisits = weeklyVisits[0].weekly_visits;
    const previousWeekVisits = lastWeekVisits[0].last_week_visits;
    const growthRate = previousWeekVisits > 0 
      ? ((currentWeekVisits - previousWeekVisits) / previousWeekVisits * 100).toFixed(1)
      : currentWeekVisits > 0 ? 100 : 0;

    res.json({
      analytics: {
        overview: {
          totalVisits: totalVisits[0].total,
          uniqueVisitors: uniqueVisitors[0].unique_visitors,
          totalLinks: totalLinks[0].total,
          recentVisits: recentVisits[0].recent_visits,
          weeklyVisits: weeklyVisits[0].weekly_visits,
          todayVisits: todayVisits[0].today_visits,
          growthRate: parseFloat(growthRate),
          memberSince: userInfo[0].created_at
        },
        charts: {
          visitsByDate: visitsByDate.map(row => ({
            date: row.date,
            visits: row.visits
          }))
        },
        insights: {
          topPlatforms: topPlatforms.map(row => ({
            platform: row.platform_name,
            icon: row.icon,
            count: row.link_count
          })),
          recentVisits: recentVisitDetails.map(row => ({
            ip: row.ip_address,
            userAgent: row.user_agent,
            timestamp: row.visited_at
          }))
        }
      }
    });

  } catch (error) {
    console.error('Get dashboard analytics error:', error);
    res.status(500).json({ error: 'Failed to get analytics data' });
  }
});

// Get detailed analytics for a specific time period
router.get('/detailed/:period', auth, async (req, res) => {
  try {
    const { period } = req.params; // 'week', 'month', 'year'
    const userId = req.user.id;
    const pool = getConnection();

    let dateFilter;
    switch (period) {
      case 'week':
        dateFilter = 'DATE_SUB(NOW(), INTERVAL 7 DAY)';
        break;
      case 'month':
        dateFilter = 'DATE_SUB(NOW(), INTERVAL 30 DAY)';
        break;
      case 'year':
        dateFilter = 'DATE_SUB(NOW(), INTERVAL 365 DAY)';
        break;
      default:
        dateFilter = 'DATE_SUB(NOW(), INTERVAL 30 DAY)';
    }

    // Get visits for the period
    const [periodVisits] = await pool.execute(
      `SELECT 
        DATE(visited_at) as date,
        COUNT(*) as visits,
        COUNT(DISTINCT ip_address) as unique_visitors
       FROM visits 
       WHERE user_id = ? 
       AND visited_at >= ${dateFilter}
       GROUP BY DATE(visited_at)
       ORDER BY date ASC`,
      [userId]
    );

    // Get hourly distribution for today
    const [hourlyDistribution] = await pool.execute(
      `SELECT 
        HOUR(visited_at) as hour,
        COUNT(*) as visits
       FROM visits 
       WHERE user_id = ? 
       AND DATE(visited_at) = CURDATE()
       GROUP BY HOUR(visited_at)
       ORDER BY hour ASC`,
      [userId]
    );

    res.json({
      period,
      data: {
        dailyStats: periodVisits,
        hourlyDistribution
      }
    });

  } catch (error) {
    console.error('Get detailed analytics error:', error);
    res.status(500).json({ error: 'Failed to get detailed analytics' });
  }
});

module.exports = router;