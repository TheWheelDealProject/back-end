DROP TABLE IF EXISTS cars;

CREATE TABLE IF NOT EXISTS cars (
  id SERIAL PRIMARY KEY,
  brand VARCHAR(255),
  rating INTEGER,
  carname VARCHAR(255),
  imgurl VARCHAR(2555),
  model VARCHAR(255),
  price INTEGER,
  speed VARCHAR(255),
  gps VARCHAR(255),
  seattype VARCHAR(255),
  automatic VARCHAR(255),
  description TEXT
);