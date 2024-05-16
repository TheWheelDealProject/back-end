DROP TABLE IF EXISTS cars;

CREATE TABLE IF NOT EXISTS cars (
  id SERIAL PRIMARY KEY,
  brand VARCHAR(255),
  rating INTEGER,
  carName VARCHAR(255),
  imgUrl VARCHAR(2555),
  model VARCHAR(255),
  price INTEGER,
  speed VARCHAR(255),
  gps VARCHAR(255),
  seatType VARCHAR(255),
  automatic VARCHAR(255),
  description TEXT
);