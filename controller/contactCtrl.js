const { client } = require('../config/dbConnect');


const getAllContacts = async (req, res) => {
    try {
      const query = 'SELECT * FROM contact';
      const result = await client.query(query);
      const contacts = result.rows;
      res.status(200).json({ contacts });
    } catch (err) {
      console.error('Error retrieving contacts', err);
      res.status(500).json({ error: 'An error occurred while retrieving contacts' });
    }
  };


  const addContact = (req, res) => {
    const { firstname, email, description } = req.body;
    
    // Insert the contact into the database
    const query = 'INSERT INTO contact (firstname, email, description) VALUES ($1, $2, $3) RETURNING *';
    const values = [firstname, email, description];
    client
      .query(query, values)
      .then((result) => {
        const insertedContact = result.rows[0]; // Assuming only one row is returned
        res.status(200).json(insertedContact);
      })
      .catch((error) => {
        console.error('Error inserting contact', error);
        res.status(500).json({ error: 'An error occurred while inserting contact' });
      });
  };


const deleteContact = async (req, res) => {
  const id = req.params.id;

  try {
    const sql = `DELETE FROM contact WHERE id = ${id} RETURNING *`;
    const result = await client.query(sql);

    if (result.rowCount > 0) {
      res.status(200).json({ message: "contact Deleted Successfully" });
    } else {
      res.status(404).json({ message: "contact Not Found" });
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



module.exports = { getAllContacts, addContact, deleteContact }; // here you can add more functions like updateBlog..itc
