const mongoose = require('mongoose');
const express = require('express');

//config
const app = express();
const port = 8080;
 
//creating Schema

const information = new mongoose.Schema({
    'username': String,
    'password': String
})

//creating the Model

const credentials = mongoose.model('credentials',information) ;
var ashran = {name:"ashran",tweet:"bhkkk bhosdike"};


//creating parsing

app.use(express.json());
// app.use(express.urlencoded({extended:true}));


console.log(ashran);

//exporting the module

exports.credentials = credentials
