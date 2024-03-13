const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Update these values with your actual local PostgreSQL connection details
const pool = new Pool({
  user: 'your_postgresql_user',       // PostgreSQL user (e.g., postgres)
  host: 'localhost',                  // Database server (usually localhost)
  database: 'dictionary_db',          // Your database name
  password: '1062004', // Password for the PostgreSQL user
  port: 5432,                         // Default PostgreSQL port
});

// Insert sample data into the PostgreSQL database
async function insertData() {
  try {
    const dictionaryData = [
      // ... (your sample words)
    ];

    await Promise.all(dictionaryData.map(async (entry) => {
      const { word, partOfSpeech, definition, synonyms, antonyms, usage } = entry;
      await pool.query(`
        INSERT INTO dictionary (word, part_of_speech, definition, synonyms, antonyms, usage)
        VALUES ($1, $2, $3, $4, $5, $6);
      `, [word, partOfSpeech, definition, synonyms, antonyms, usage]);
    }));

    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

// Start the Express server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  // Insert data on server startup
  await insertData();
});
