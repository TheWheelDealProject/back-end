const express = require('express'); // dont change this line 
const router = express.Router();// dont change this line
const { getAllCars, addCar } = require('../controller/carCtrl');// here you can importe more functions 


// GET EndPoints
router.get('/getAllCars', getAllCars);




// POST EndPoints
router.post('/addCar', addCar);






module.exports = router;// dont change this line