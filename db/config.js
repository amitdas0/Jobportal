const mongoose=require('mongoose');

var conn=mongoose.connect("mongodb+srv://amitraj1821234:93549AM78272IT@cluster0.svoc5sr.mongodb.net/testing?retryWrites=true&w=majority&appName=Cluster0",{

  useNewUrlParser:true,
  useUnifiedTopology:true

})

.then(()=>console.log("connection successfully.."))
.catch((err)=>console.log(err));

module.exports=conn;