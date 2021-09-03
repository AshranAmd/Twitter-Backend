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

// trying fetching while including the the headers for the transaction

// var url:"https://api.spotify.com/v1/artists/69xcFpmqTOmFNOL08Bxyci/top-tracks?market=ES";
// async function getting(){
// var bearer = "BQCpKF4DKIsXpU4IpZc4PEAD3W9QGiFme5aIljQMppQib3E_So0v1EnmIvfN-Y6eSp874cVXzvlOfnNJLmLn0KfJymYZj_7AVBCq-wo9jqfUhnUCj2t7zCYz0QpLyu4J3YX3DVPlHj0QkrLB394iHOdMBWKpDhA";
// var songs = await fetch(url,{headers:{"Authorization": bearer,"Content-Type":json,"Accept":json}});
// var refined = songs.json;
// console.log(refined);
// }



// app.get("/", (req,res)=>{res.send(refined)});


// var tweet = tweets.findOne({"name":"Ashran"},function result (data,err){
//     if (data ){
//         console.log(data);
//         res.send(data);
//     }
//     else{
//         console.log(err);
//     }
// })

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


// var tweet = tweets.findOne({"name":"Ashran"},function result (data,err){
//     if (data ){
//         console.log(data);
//         res.send(data);
//     }
//     else{
//         console.log(err);
//     }
// })


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

