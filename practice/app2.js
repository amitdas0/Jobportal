var express= require('express');
const app=express();
app.set('')

app.get('/',function(req,res){
    res.send("hello world");
})

app.listen(8080);