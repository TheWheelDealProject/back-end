DROP TABLE IF EXISTS blogs;
CREATE TABLE IF NOT EXISTS blogs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  date VARCHAR(20),
  time VARCHAR(10),
  imgUrl VARCHAR(2555),
  description TEXT,
  quote TEXT
);
