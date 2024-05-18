DROP TABLE IF EXISTS bookingInfo;

CREATE TABLE IF NOT EXISTS bookingInfo (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  email VARCHAR(255),
  phoneNo VARCHAR(255),
  fromAddress VARCHAR(255),
  toAddress VARCHAR(255),
  numOfPersons INTEGER,
  numOfBags INTEGER,
  journeyDate VARCHAR(20),
  journeyTime VARCHAR(20),
  description TEXT
);