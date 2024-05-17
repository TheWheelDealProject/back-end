const express = require('express'); // dont change this line 
const router = express.Router();// dont change this line
const { getAllCars, addCar, deleteCar, EditCar, getCar, handleServerError } = require('../controller/carCtrl');// here you can importe more functions 


// GET EndPoints
router.get('/getAllCars', getAllCars);




// POST EndPoints
router.post('/addCar', addCar);


//delete EndPoints
router.delete('/deleteCar/:id', deleteCar);


//EditCar EndPoints
router.put('/editCar/:id', EditCar);


//GETCAR EndPoint
router.get('/getCar/:id', getCar)



router.use(handleServerError);





module.exports = router;// dont change this line