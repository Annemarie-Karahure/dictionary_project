CREATE TABLE IF NOT EXISTS dictionary (
  id SERIAL PRIMARY KEY,
  word VARCHAR(255),
  part_of_speech VARCHAR(50),
  definition TEXT,
  synonyms TEXT[],
  antonyms TEXT[],
  usage TEXT
);
