const mysql = require('mysql2/promise');

const dbConfig = {
   host: process.env.DB_HOST || 'sql10.freesqldatabase.com	',
  user: process.env.DB_USER || 'sql10789545',
  password: process.env.DB_PASSWORD || 'tzm3B33mgj',
  database: process.env.DB_NAME || 'sql10789545',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let pool;

const connectDB = async () => {
  try {
    // Create connection pool
    pool = mysql.createPool(dbConfig);
    
    // Test connection
    const connection = await pool.getConnection();
    console.log('✅ Database connected successfully');
    connection.release();
    
    // Create tables if they don't exist
    await createTables();
    
    // Insert default platforms
    await insertDefaultPlatforms();
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    throw error;
  }
};

const createTables = async () => {
  try {
    // Users table
    
  await pool.execute(`
  CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    bio TEXT,
    profile_image VARCHAR(255),
    theme ENUM('light', 'dark') DEFAULT 'light',
    template ENUM('classic', 'modern', 'minimal', 'gradient', 'neon', 'cosmic', 'nature') DEFAULT 'classic',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT NULL
  )
`);


    // Platforms table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS platforms (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) UNIQUE NOT NULL,
        icon VARCHAR(100) NOT NULL,
        color VARCHAR(20) DEFAULT '#3B82F6',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Social links table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS social_links (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT NOT NULL,
        platform_name VARCHAR(50) NOT NULL,
        url VARCHAR(255) NOT NULL,
        icon VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    // Visits table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS visits (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT NOT NULL,
        ip_address VARCHAR(100),
        user_agent TEXT,
        visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    console.log('✅ Database tables created successfully');
  } catch (error) {
    console.error('❌ Error creating tables:', error.message);
    throw error;
  }
};

const insertDefaultPlatforms = async () => {
  try {
    const platforms = [
      { name: 'Facebook', icon: 'fab fa-facebook', color: '#1877F2' },
      { name: 'Instagram', icon: 'fab fa-instagram', color: '#E4405F' },
      { name: 'Twitter', icon: 'fab fa-twitter', color: '#1DA1F2' },
      { name: 'LinkedIn', icon: 'fab fa-linkedin', color: '#0A66C2' },
      { name: 'YouTube', icon: 'fab fa-youtube', color: '#FF0000' },
      { name: 'TikTok', icon: 'fab fa-tiktok', color: '#000000' },
      { name: 'Snapchat', icon: 'fab fa-snapchat', color: '#FFFC00' },
      { name: 'Discord', icon: 'fab fa-discord', color: '#5865F2' },
      { name: 'Telegram', icon: 'fab fa-telegram', color: '#0088CC' },
      { name: 'WhatsApp', icon: 'fab fa-whatsapp', color: '#25D366' },
      { name: 'Website', icon: 'fas fa-globe', color: '#3B82F6' },
      { name: 'Portfolio', icon: 'fas fa-briefcase', color: '#8B5CF6' },
      { name: 'Blog', icon: 'fas fa-blog', color: '#10B981' },
      { name: 'Email', icon: 'fas fa-envelope', color: '#EF4444' },
      { name: 'Reddit', icon: 'fab fa-reddit', color: '#FF4500' },
      { name: 'Pinterest', icon: 'fab fa-pinterest', color: '#BD081C' },
      { name: 'Twitch', icon: 'fab fa-twitch', color: '#9146FF' },
      { name: 'Spotify', icon: 'fab fa-spotify', color: '#1DB954' },
      { name: 'Behance', icon: 'fab fa-behance', color: '#1769FF' },
      { name: 'Dribbble', icon: 'fab fa-dribbble', color: '#EA4C89' },
      { name: 'Medium', icon: 'fab fa-medium', color: '#000000' },
      { name: 'Stack Overflow', icon: 'fab fa-stack-overflow', color: '#F48024' },
      { name: 'Dev.to', icon: 'fab fa-dev', color: '#0A0A0A' },
      { name: 'Hashnode', icon: 'fas fa-hashtag', color: '#2962FF' },
      { name: 'Substack', icon: 'fas fa-envelope-open-text', color: '#FF6719' },
      { name: 'Newsletter', icon: 'fas fa-newspaper', color: '#DC2626' }
    ];

    for (const platform of platforms) {
      try {
        await pool.execute(
          'INSERT IGNORE INTO platforms (name, icon, color) VALUES (?, ?, ?)',
          [platform.name, platform.icon, platform.color]
        );
      } catch (error) {
        // Platform already exists, skip
      }
    }

    console.log('✅ Default platforms inserted successfully');
  } catch (error) {
    console.error('❌ Error inserting platforms:', error.message);
  }
};

const getConnection = () => {
  if (!pool) {
    throw new Error('Database not connected. Call connectDB() first.');
  }
  return pool;
};

module.exports = {
  connectDB,
  getConnection
}; 