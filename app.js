const router = require('./controller/controller');

const bodyParser=require('body-parser') // requiring body-parser

var express= require('express');
const app=express();

var user=require('./db/config')
app.set('view engine','ejs');
app.use(express.static('views')) // this will allow to use inside the folder

const path = require('path');
app.use( express.static(path.join(__dirname, '/upload')))



//this will allow frontend to the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



    


   



app.use('/', router); //creating base url through our router



app.listen(8080);