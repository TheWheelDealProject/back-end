const express = require('express'); // dont change this line 
const router = express.Router();// dont change this line
const { getAllBookingInfo, addBookingInfo, deleteBookingInfo } = require('../controller/bookingInfo');// here you can importe more functions 


// GET EndPoints
router.get('/getAllBookingInfo', getAllBookingInfo);


// POST EndPoints
router.post('/addBookingInfo', addBookingInfo);


//delete EndPoints
router.delete('/deleteBookingInfo/:id', deleteBookingInfo);







module.exports = router;// dont change this line