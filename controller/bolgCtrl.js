const { client } = require('../config/dbConnect');


const getAllBlogs = async (req, res) => {
  try {
    const query = 'SELECT * FROM blogs';
    const result = await client.query(query);
    const blogs = result.rows;
    res.status(200).json({ blogs });
  } catch (err) {
    console.error('Error retrieving blogs', err);
    res.status(500).json({ error: 'An error occurred while retrieving blogs' });
  }
};

const addBlog = (req, res) => {
  const { id, title, author, date, time, imgUrl, description, quote } = req.body;

  // Insert the blog into the database
  const query = 'INSERT INTO blogs (id, title, author, date, time, imgUrl, description, quote) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
  const values = [id, title, author, date, time, imgUrl, description, quote];
  client
    .query(query, values)
    .then((result) => {
      const insertedBlog = result.rows[0]; // Assuming only one row is returned
      res.status(200).json(insertedBlog);
    })
    .catch((error) => {
      handleServerError(error);
    });
};


module.exports = { getAllBlogs, addBlog }; // here you can add more functions like updateBlog..itc
