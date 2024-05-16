const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);

const connect = async () => {
  try {
    await client.connect();
    console.log('Connected to the database successfully');
  } catch (err) {
    console.error('Error connecting to the database', err);
  }
};

module.exports = { client, connect };