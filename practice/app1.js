const express=require('express');
const app=express();

// const { Router } = require("express");

// app.get('/',function(req,res){
//     res.send('login page 7767');
// })

// app.get('/about-us',function(req,res){
//     res.send('about us page 7868');
// })




// app.listen(1200);

const router=express.Router();

router.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})

router.get('/aboutus',function(req,res){
    res.sendFile(__dirname+"/about.html");
})

app.use('/',router);
app.listen(9999);

