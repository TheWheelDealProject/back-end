DROP TABLE IF EXISTS bookingInfo;

CREATE TABLE IF NOT EXISTS bookingInfo (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  email VARCHAR(255),
  phoneno VARCHAR(255),
  fromaddress VARCHAR(255),
  toaddress VARCHAR(255),
  numofpersons INTEGER,
  numofbags INTEGER,
  journeydate VARCHAR(20),
  journeytime VARCHAR(20),
  description TEXT
);