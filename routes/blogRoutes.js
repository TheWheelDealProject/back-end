const express = require('express'); // dont change this line 
const router = express.Router();// dont change this line
const { getAllBlogs, addBlog } = require('../controller/bolgCtrl');// here you can importe more functions 


// GET EndPoints
router.get('/getAllBlogs', getAllBlogs);




// POST EndPoints
router.post('/addBlog', addBlog);






module.exports = router;// dont change this line