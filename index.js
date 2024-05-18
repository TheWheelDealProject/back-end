const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;
app.use(express.json());
const { connect } = require('./config/dbConnect');
const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

connect(); // connet to DB

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



const blogRouter = require('./routes/blogRoutes'); 
const carRouter = require('./routes/carRoutes');
const bookingInfoRouter = require('./routes/bookingInfoRoutes');
const contactRouter = require('./routes/contactRoutes');
const commentRouter = require('./routes/commentRoutes');


app.use('/', blogRouter); 
app.use('/', carRouter); 
app.use('/', bookingInfoRouter ); 
app.use('/', contactRouter ); 
app.use('/',  commentRouter); 



// Start the server
app.listen(PORT, () => {
    console.log('Server is running on port 3001');
});