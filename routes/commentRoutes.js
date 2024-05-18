const express = require('express'); // dont change this line 
const router = express.Router();// dont change this line
const { getAllComments, addComment, deleteComment } = require('../controller/commentCtrl');// here you can importe more functions 


// GET EndPoints
router.get('/getAllComments', getAllComments);


// POST EndPoints
router.post('/addComment',addComment );


//delete EndPoints
router.delete('/deleteComment/:id', deleteComment);


  



module.exports = router;// dont change this line