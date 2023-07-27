const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const app = express();

// connect to mongodb

// middleware to parse incoming json data
app.use(express.json());

app.use('/api',userRoute);

const port = 3000;
app.listen(port,()=>{

})