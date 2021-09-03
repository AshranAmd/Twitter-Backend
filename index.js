const { json } = require('express');
const express = require('express');
const user = require('./tweetsdb');
const credential = require('./credential');
const UserDetails = require('./userDetailDb')
const mongoose = require('mongoose');


//config

const app = express();
const port = 8080;
var db = 'tweetsdb';

//connection to database

mongoose.connect(`mongodb://localhost:27017/${db}`,{useNewUrlParser:true,useUnifiedTopology:true})

//middleware

// parser 

app.use(express.json());
var urlendcoded = app.use(express.urlencoded({extended:false}));

// request and response and cors protocol

app.use(function(req, res, next) {
    // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  next()
})
  
 
//api endpoints


app.get('/', async (req,res)=>{

  var db = 'tweetsdb'
    const tweet = await user.tweets.find({}).limit(3).skip(15);
    res.send(tweet)
}
)


 //listen port


 app.listen(port, ()=>console.log(`listening on the port:${port}`))



app.post('/save',(req,res)=>{

  var db = 'tweetsdb';

      var anotherone = new user.tweets({'name' :req.body.twitter ,'tweet':req.body.tweetContent});
      res.redirect('http://localhost:3000/home');
      // res.send("saved ")
      console.log(req.body)
      anotherone.save(function(err,save){
          if(err){
              console.log(err)
          }
          else{
              console.log("saved successfully", anotherone)
          }
      })
  })


  // register saving credential

  app.post('/register',(req,res)=>{

    

      var db = 'credentialsdb'
    
        var anotherone = new credential.credentials({'username' :req.body.username ,'password':req.body.password});
        res.redirect('http://localhost:3000/login');
        // res.send("saved ")
        console.log(req.body)
        anotherone.save(function(err,save){
            if(err){
                console.log(err)
            }
            else{
                console.log("saved successfully", anotherone)
            }
        })
    })

  //   // logging in reqeust

    app.post('/login', async (req,res)=>{

      var db = 'credentialsdb'

      var username = req.body.username;
      var password = req.body.password;
      console.log(username)
      console.log(password)
      console.log(req.body)

      var result = await credential.credentials.find({"username":username,"password":password});
      console.log(result.length)
      if(result.length === 0){
        res.send('Go to the previous page and try again to login because previous credentials were not right.')
      }
      else {res.redirect('http://localhost:3000/home')}

    })


    // fetcing acccount details 

    app.get('/credentials', async(req,res)=>{

      var db = 'credentialsdb'
      var users = await credential.credentials.find({});
      res.send(users)

    })


//userdetails

app.post('/user', (req,res)=>{

  var data = req.body;
  var db = 'userDetailDb';
  var dete = new UserDetails.details(data);
  dete.save(function(err,result){
    if(err){
      console.log(err);
    }
    else{console.log('saved successfully',dete)}
  }
  )
  res.redirect('http://localhost:3000/home');
  res.json({
    status:'ok',
    data : token
  })

})

// fetching user details

app.get('/user', async (req,res)=>{

  var db = 'userDetailDb';
  var dete = await UserDetails.details.find({});
  res.send(dete)

})

var token = "hello";
//tyring jwt

app.get('/checking',(req,res)=>{
  res.json({
    status:"mast"
  })
  console.log(localStorage.getItem('token'))
})

app.get('/json',(req,res)=>{
  res.json({
    status:'ok',
    data:token
  })
  localStorage.setItem('token',token);
})


