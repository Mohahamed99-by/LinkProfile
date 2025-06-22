const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'linkprofile_db',
};

async function updateTemplateEnum() {
  let connection;
  
  try {
    connection = await mysql.createConnection(dbConfig);
    console.log('✅ Connected to database');

    // Update the ENUM to include all templates
    await connection.execute(`
      ALTER TABLE users 
      MODIFY COLUMN template ENUM('classic', 'modern', 'minimal', 'gradient', 'neon', 'cosmic', 'nature') DEFAULT 'classic'
    `);
    
    console.log('✅ Updated template ENUM to include cosmic and nature templates');
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
updateTemplateEnum()
  .then(() => {
    console.log('Template ENUM update completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Template ENUM update failed:', error);
    process.exit(1);
  });