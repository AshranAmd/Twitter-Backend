const mongoose = require('mongoose');
const express = require('express');

//config
const app = express();
const port = 8080;
 
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