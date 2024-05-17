const express = require('express'); // dont change this line 
const router = express.Router();// dont change this line
const { getAllBlogs, addBlog , deleteBlog, editBlog, getBlog } = require('../controller/bolgCtrl');// here you can importe more functions 


// GET EndPoints
router.get('/getAllBlogs', getAllBlogs);




// POST EndPoints
router.post('/addBlog', addBlog);


// delete EndPoints
router.delete('/deleteBlog/:id',deleteBlog);



// editBlog EndPoints
router.put('/editBlog/:id',editBlog)




// GETCAR EndPoints
router.get('/getBlog/:id',getBlog);







module.exports = router;// dont change this line