const mongoose = require('mongoose');
const express = require('express');

//config
const app = express();
const port = 8080;
 
//connection with the database

mongoose.connect('mongodb://localhost:27017/credentialsdb',{useNewUrlParser:true,useUnifiedTopology:true})

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


//saving the instances

// app.post('/save',(req,res)=>{
//     var anotherone = new tweets({'name' : req.body.name,'tweet' :req.body.tweet});
//     res.send('saved with success');
//     anotherone.save(function(err,save){
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log("saved successfully", anotherone)
//         }
//     })
// })





// var tweet = tweets.findOne({"name":"Ashran"},function result (data,err){
//     if (data ){
//         console.log(data);
//         res.send(data);
//     }
//     else{
//         console.log(err);
//     }
// })

console.log(ashran);

//exporting the module

exports.credentials = credentials

//get url

// app.get('/', publishing)
//     tweets.findOne({"name":"Faraz"},function result (data,err){
//         if (err){
//             console.log(err);
//         }
//         else{
//             console.log(data);
//             res.send(ashran);
//         }
//     })

    // var tweet = await tweets.find({}).then(data=>{
    //     // data.map((item)=>{
    //     //     answer = item.name;
    //     //     console.log("This is the hero of our campaign : ",answer);
    //     //     res.send(answer)
    //     answer = data[0].name;
    //     vocal = data[0].tweet;
    //     res.send(ashran);
    //     })
    //     .catch(err=>{console.log(err)});
    // })


// port listeing

// app.listen(port,()=>console.log(`server is listening on ${port}`))


//tyring

var answer;
var vocal;
// var tweet =  tweets.find({},function result (data,err){
//     if (data ){
//             answer=data.name;
//         }
//     else{
//         console.log(err);
//     }
// })
// async function printing (){
// await console.log(answer);}

// printing();


// async function action(){
// var tweet = await tweets.find({}).then(data=>{
//     data.map((item)=>{
//         answer = item.name;
//         console.log("This is the hero of our campaign : ",answer);
//     })
// })
// .catch(err=>{console.log(err)});

// console.log(answer);
// }

// console.log("this is me",answer);
// action();

// async function publishing(req,res){
// var tweet = await tweets.find({});
// console.log(tweet[0].tweet);
// res.send(tweet[1].tweet);
// }


//using the param to find

// var ashran = "hello";
// app.get('/user', async (req,res)=>{
//     var name = req.query.name;
//     console.log(req.query);
//     var result = await tweets.find({'name':name});
//     res.send(result);
//     console.log(result);
// })