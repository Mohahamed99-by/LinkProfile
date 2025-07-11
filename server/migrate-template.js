const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
     host: process.env.DB_HOST || 'sql10.freesqldatabase.com	',
  user: process.env.DB_USER || 'sql10789545',
  password: process.env.DB_PASSWORD || 'tzm3B33mgj',
  database: process.env.DB_NAME || 'sql10789545',
};

async function migrateTemplate() {
  let connection;
  
  try {
    connection = await mysql.createConnection(dbConfig);
    console.log('✅ Connected to database');

    // Check if template column exists
    const [columns] = await connection.execute(`
      SELECT COLUMN_NAME 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'users' AND COLUMN_NAME = 'template'
    `, [dbConfig.database]);

    if (columns.length === 0) {
      // Add template column
      await connection.execute(`
        ALTER TABLE users 
        ADD COLUMN template ENUM('classic', 'modern', 'minimal', 'gradient', 'neon') DEFAULT 'classic'
      `);
      console.log('✅ Added template column to users table');
    } else {
      console.log('✅ Template column already exists');
    }

    // Update existing users to have classic template
    const [result] = await connection.execute(`
      UPDATE users SET template = 'classic' WHERE template IS NULL
    `);
    
    console.log(`✅ Updated ${result.affectedRows} users with default template`);
    console.log('🎉 Migration completed successfully!');

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// Run migration
migrateTemplate()
  .then(() => {
    console.log('Migration script completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Migration script failed:', error);
    process.exit(1);
  });