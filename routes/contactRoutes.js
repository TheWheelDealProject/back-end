const express = require('express'); // dont change this line 
const router = express.Router();// dont change this line
const { getAllContacts, addContact, deleteContact } = require('../controller/contactCtrl');// here you can importe more functions 


// GET EndPoints
router.get('/getAllContacts', getAllContacts);


// POST EndPoints
router.post('/addContact',addContact );


//delete EndPoints
router.delete('/deleteContact/:id', deleteContact);


  



module.exports = router;// dont change this line