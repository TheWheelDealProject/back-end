const { client } = require('../config/dbConnect');


const getAllComments = async (req, res) => {
    try {
      const query = 'SELECT * FROM comments';
      const result = await client.query(query);
      const comments = result.rows;
      res.status(200).json({ comments });
    } catch (err) {
      console.error('Error retrieving comments', err);
      res.status(500).json({ error: 'An error occurred while retrieving comments' });
    }
  };


  const addComment = (req, res) => {
    const { firstname, email, comment } = req.body;
    
    // Insert the contact into the database
    const query = 'INSERT INTO comments (firstname, email, comment) VALUES ($1, $2, $3) RETURNING *';
    const values = [firstname, email, comment];
    client
      .query(query, values)
      .then((result) => {
        const insertedComments = result.rows[0]; // Assuming only one row is returned
        res.status(200).json(insertedComments);
      })
      .catch((error) => {
        console.error('Error inserting comment', error);
        res.status(500).json({ error: 'An error occurred while inserting comment' });
      });
  };


const deleteComment = async (req, res) => {
  const id = req.params.id;

  try {
    const sql = `DELETE FROM comments WHERE id = ${id} RETURNING *`;
    const result = await client.query(sql);

    if (result.rowCount > 0) {
      res.status(200).json({ message: "Comment Deleted Successfully" });
    } else {
      res.status(404).json({ message: "Comment Not Found" });
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



module.exports = { getAllComments, addComment, deleteComment }; // here you can add more functions like updateBlog..itc
