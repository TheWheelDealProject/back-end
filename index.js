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



// your work under here..
const blogRouter = require('./routes/blogRoutes'); // importe the blogRoutes
const carRouter = require('./routes/carRoutes');


app.use('/', blogRouter); // this is an example...
app.use('/', carRouter); // this is an example...



// Start the server
app.listen(PORT, () => {
    console.log('Server is running on port 3001');
});