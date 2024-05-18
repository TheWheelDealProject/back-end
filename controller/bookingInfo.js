const { client } = require('../config/dbConnect');


const getAllBookingInfo = async (req, res) => {
  try {
    const query = 'SELECT * FROM bookingInfo';
    const result = await client.query(query);
    const bookingInfos = result.rows;
    res.status(200).json({ bookingInfos });
  } catch (err) {
    console.error('Error retrieving bookingInfo', err);
    res.status(500).json({ error: 'An error occurred while retrieving bookingInfo' });
  }
};


const addBookingInfo = (req, res) => {
    const { firstName, lastName, email, phoneNo, fromAddress, toAddress, numOfPersons, numOfBags, journeyDate, journeyTime, description } = req.body;
  
    // Insert the booking info into the database
    const query = 'INSERT INTO bookingInfo (firstName, lastName, email, phoneNo, fromAddress, toAddress, numOfPersons, numOfBags, journeyDate, journeyTime, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *';
    const values = [firstName, lastName, email, phoneNo, fromAddress, toAddress, numOfPersons, numOfBags, journeyDate, journeyTime, description];
    client
      .query(query, values)
      .then((result) => {
        const insertedBookingInfo = result.rows[0]; // Assuming only one row is returned
        res.status(200).json(insertedBookingInfo);
      })
      .catch((error) => {
        handleServerError(error, req, res);
      })
  };


const deleteBookingInfo = async (req, res) => {
  const id = req.params.id;

  try {
    const sql = `DELETE FROM bookingInfo WHERE id = ${id} RETURNING *`;
    const result = await client.query(sql);

    if (result.rowCount > 0) {
      res.status(200).json({ message: "BookingInfo Deleted Successfully" });
    } else {
      res.status(404).json({ message: "BookingInfo Not Found" });
    }
  } catch (error) {
    handleServerError(error, req, res)
  }
};



function handleServerError(err, req, res) {
  res.status(500).json({
    "status": 500,
    "responseText": `"Sorry, something  went wrong":  ${err}`
  });
}



module.exports = { getAllBookingInfo, addBookingInfo, deleteBookingInfo }; // here you can add more functions like updateBlog..itc
