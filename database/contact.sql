DROP TABLE IF EXISTS contact;

CREATE TABLE IF NOT EXISTS contact (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  email VARCHAR(255),
  description TEXT
);