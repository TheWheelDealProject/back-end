const { client } = require('../config/dbConnect');


const getAllCars = async  (req, res) => {
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
      handleServerError(error,req,res);
    })
};


const deleteCar = async (req, res) => {
  const id = req.params.id;

  try {
    const sql = `DELETE FROM cars WHERE id = ${id} RETURNING *`;
    const result = await client.query(sql);

    if (result.rowCount > 0) {
      res.status(200).json({ message: "Car deleted successfully" });
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    handleServerError(error,req,res)
  }
};


const EditCar = (req,res)=>{
  const {  brand, rating, carName, imgUrl, model, price, speed, gps, seatType, automatic, description } = req.body;
  const id = req.params.id;
  const sql =`UPDATE cars SET brand=$1, rating=$2, carName=$3, imgUrl=$4, model=$5,price=$6,speed=$7,gps=$8,seatType=$9,automatic=$10, description=$11 where id=${id} RETURNING *`;
  const values = [ brand, rating, carName, imgUrl, model, price, speed, gps, seatType, automatic, description];
 client.query(sql,values)
 .then((data)=>{
  if (data.rows.length > 0) {
      res.status(200).send(data.rows);
  } else {
      res.status(404).send({ message: "Car Not Found" });
  }
 })
 .catch((error)=>{
  handleServerError(error,req,res)
 })
}




const getCar = (req,res)=>{
  const id = req.params.id;
  const sql = `SELECT * FROM cars where id = ${id} `;
  client.query(sql)
  .then((data)=>{
    if (data.rows.length > 0) {
      res.status(200).send(data.rows);
  } else {
      res.status(404).send({ message: "cars not found" });
  }
})
.catch((error)=>{
  handleServerError(error,req,res)
})
}



function handleServerError(err,req,res){
  res.status(500).json({
      "status": 500,
      "responseText": `"Sorry, something  went wrong":  ${err}`
  });
}



module.exports = { getAllCars, addCar, deleteCar, EditCar, getCar, handleServerError }; // here you can add more functions like updateBlog..itc
