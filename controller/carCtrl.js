const { client } = require('../config/dbConnect');


const getAllCars = async (req, res) => {
  try {
    const query = 'SELECT * FROM cars';
    const result = await client.query(query);
    const cars = result.rows;
    res.status(200).json({ cars });
  } catch (err) {
    console.error('Error retrieving cars', err);
    res.status(500).json({ error: 'An error occurred while retrieving cars' });
  }
};

const addCar = (req, res) => {
  const { id, brand, rating, carName, imgUrl, model, price, speed, gps, seatType, automatic, description } = req.body;

  // Insert the car into the database
  const query = 'INSERT INTO cars (id, brand, rating, carName, imgUrl, model, price, speed, gps, seatType, automatic, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';
  const values = [id, brand, rating, carName, imgUrl, model, price, speed, gps, seatType, automatic, description];
  client
    .query(query, values)
    .then((result) => {
      const insertedCar = result.rows[0]; // Assuming only one row is returned
      res.status(200).json(insertedCar);
    })
    .catch((error) => {
      handleServerError(error);
    });
};


module.exports = { getAllCars, addCar }; // here you can add more functions like updateBlog..itc
