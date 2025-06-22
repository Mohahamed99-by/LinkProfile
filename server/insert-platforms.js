const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'linkprofile_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

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

async function insertPlatforms() {
  let pool;
  
  try {
    // Create connection pool
    pool = mysql.createPool(dbConfig);
    
    // Test connection
    const connection = await pool.getConnection();
    console.log('✅ Database connected successfully');
    connection.release();
    
    // Create platforms table if it doesn't exist
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS platforms (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) UNIQUE NOT NULL,
        icon VARCHAR(100) NOT NULL,
        color VARCHAR(20) DEFAULT '#3B82F6',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    console.log('✅ Platforms table created/verified');
    
    // Delete incorrect entry if it exists
    try {
      await pool.execute("DELETE FROM platforms WHERE name = 'Substackt'");
      console.log('✅ Removed incorrect "Substackt" entry if it existed');
    } catch (error) {
      // Ignore errors here, table or column might not exist on first run
    }
    
    // Insert platforms
    let insertedCount = 0;
    let skippedCount = 0;
    
    for (const platform of platforms) {
      try {
        await pool.execute(
          'INSERT INTO platforms (name, icon, color) VALUES (?, ?, ?)',
          [platform.name, platform.icon, platform.color]
        );
        console.log(`✅ Inserted: ${platform.name}`);
        insertedCount++;
      } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
          console.log(`⏭️  Skipped (already exists): ${platform.name}`);
          skippedCount++;
        } else {
          console.error(`❌ Error inserting ${platform.name}:`, error.message);
        }
      }
    }
    
    console.log('\n📊 Summary:');
    console.log(`✅ Inserted: ${insertedCount} platforms`);
    console.log(`⏭️  Skipped: ${skippedCount} platforms (already exist)`);
    console.log(`📋 Total: ${platforms.length} platforms processed`);
    
    // Show all platforms in database
    const [allPlatforms] = await pool.execute('SELECT name, icon, color FROM platforms ORDER BY name');
    console.log('\n📋 All platforms in database:');
    allPlatforms.forEach(platform => {
      console.log(`  • ${platform.name} (${platform.icon}) - ${platform.color}`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    if (pool) {
      await pool.end();
    }
  }
}

// Run the script
insertPlatforms(); 