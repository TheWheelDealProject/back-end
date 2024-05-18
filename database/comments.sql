DROP TABLE IF EXISTS comments;
CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  email VARCHAR(255),
  comment TEXT
);