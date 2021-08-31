const { json } = require('express');
const express = require('express');
const user = require('./tweetsdb')

//config

const app = express();
const port = 8080;

//middleware

// parser 

app.use(express.json());

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
  
  //fake api

  // const data = [{"name":"ashran","tweet":"treat everyday a separate entity and start every morning happily as they say one day at a time"},
  //               {"name":"furquan","tweet":"money saved is money earned as they say in old sayings"},
  //               {"name":"faraz","tweet":"please stop this shit now you guys are just stupidly posting shit keep that shit to yourself"}];

  // // //creating some html

  // var a = document.createElement("p");
  // var node = document.createTextNode(refined);
  // a.appendChild(node);
  // var body = document.getElementById("show");
  // body.appendChild(a); 

// //api endpoints

app.get('/', async (req,res)=>{
    const tweet = await user.tweets.find({});
    res.send(tweet)
    // console.log(data);


}
)
//delete request 

// app.delete('/', async (req,res)=>{
//   const tweet = await user.tweets.deleteOne({"_id":ObjectId("612dbfab3d89aab1a4913581")})
//   res.send("success")
// })

//post request

// app.post("/", async (req,res)=>{
//   const add = req.body.age;
//   const addition = data.concat(add);
//   console.log(data);
// })

// app.post('/', async (req,res)=>{

  // const name = document.getElementByClassName('twitter').value;
  // const tweet = document.getElementByClassName('tweet-content').value;
  

// })

// app.get('/save', async (req,res)=>{
//     const tweet = await user.tweets.
//     save({'name':'Ahamad','tweet':'we need to be awake now.'})
// }
// )

 //listen port
 app.listen(port, ()=>console.log(`listening on the port:${port}`))



// trying fetching while including the the headers for the transaction

// var url:"https://api.spotify.com/v1/artists/69xcFpmqTOmFNOL08Bxyci/top-tracks?market=ES";
// async function getting(){
// var bearer = "BQCpKF4DKIsXpU4IpZc4PEAD3W9QGiFme5aIljQMppQib3E_So0v1EnmIvfN-Y6eSp874cVXzvlOfnNJLmLn0KfJymYZj_7AVBCq-wo9jqfUhnUCj2t7zCYz0QpLyu4J3YX3DVPlHj0QkrLB394iHOdMBWKpDhA";
// var songs = await fetch(url,{headers:{"Authorization": bearer,"Content-Type":json,"Accept":json}});
// var refined = songs.json;
// console.log(refined);
// }



// app.get("/", (req,res)=>{res.send(refined)});

app.post('/save',(req,res)=>{

  //setting the values of compose 
  // var anotherone = new tweets({'name' : req.body.name,'tweet' :req.body.tweet});
  
  // saving 
  
      var anotherone = new user.tweets({'name' :req.body.name ,'tweet':req.body.tweet});
      res.send('saved with success');
      anotherone.save(function(err,save){
          if(err){
              console.log(err)
          }
          else{
              console.log("saved successfully", anotherone)
          }
      })
  })