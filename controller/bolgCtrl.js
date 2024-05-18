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
      handleServerError(error,req,res);
    });
};


const deleteBlog = async (req, res) => {
  const id = req.params.id;

  try {
    const sql = `DELETE FROM blogs WHERE id = ${id} RETURNING *`;
    const result = await client.query(sql);
    if (result.rowCount > 0) {
      res.status(200).json({ message: "blog deleted successfully" });
    } else {
      res.status(404).json({ message: "blog not found" });
    }
  } catch (error) {
    handleServerError(error,req,res)
  }
};


const editBlog = (req,res)=>{
  const {title, author, date, time, imgurl, description, quote } = req.body;
  const id = req.params.id;
  const sql =`UPDATE blogs SET title=$1, author=$2, date=$3, time=$4, imgurl=$5, description=$6, quote=$7 where id=${id} RETURNING *`;
 const values = [title,author,date,time,imgurl,description,quote]
 client.query(sql,values)
 .then((data)=>{
  if (data.rows.length > 0) {
      res.status(200).send(data.rows);
  } else {
      res.status(404).send({ message: "Blog Not Found" });
  }
 })
 .catch((error)=>{
  handleServerError(error,req,res)
 })
};

const getBlog = (req,res)=>{
  const id = req.params.id;
  const sql = `SELECT * FROM blogs where id = ${id}`;
  client.query(sql)
  .then((data)=>{
    if(data.rows.length > 0 ){
      res.status(200).send(data.rows)
    }else{
      res.status(404).send({message: "Blog Not Found"})
    }
  })
  .catch((error)=>{
    handleServerError(error,req,res)
  })
};



function handleServerError(err,req,res){
  res.status(500).json({
      "status": 500,
      "responseText": `"Sorry, something  went wrong":  ${err}`
  });
}






module.exports = { getAllBlogs, addBlog, deleteBlog, editBlog, getBlog}; // here you can add more functions like updateBlog..itc
 