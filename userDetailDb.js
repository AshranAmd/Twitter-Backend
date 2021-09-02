const mongoose = require('mongoose');
const express = require('express');

//config
const app = express();
const port = 8080;
 
//connection with the database

mongoose.connect('mongodb://localhost:27017/userDetailDb',{useNewUrlParser:true,useUnifiedTopology:true})

//creating Schema

const information = new mongoose.Schema({
    'username': String,
    'place': String,
    'age': String,
    'type': String
})

//creating the Model

const details = mongoose.model('details',information) ;


//creating parsing

app.use(express.json());

exports.details = details