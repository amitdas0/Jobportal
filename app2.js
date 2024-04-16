// var express= require('express');
// const app=express();

const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://amitraj1821234:93549AM78272IT@cluster0.svoc5sr.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0",{
  useUnifiedTopology:true

})

.then(()=>console.log("connection successfully"))
.catch((err)=>console.log(err));


//schema
// a mongoose schema defines the structure of the document

const listSchema = new mongoose.Schema({
    name:
        {type:String,
        required:true

    },
    
    email:
         {type:String,
            required:true
    },

    active:Boolean,
    date:{
        type:Date,
        default:Date.now // this take the current date of present
    }
})

// a mongoose model is a wrapper on the mongoose schema
//mongoose model provides an interface to the database for creating,querying,updating, etc

//collection creation

// so imp when we pass const variable its called class
// so it should be start with caps

const Details = new mongoose.model("Details" , listSchema);
//details parameter is a name of collection name and its only defined in singular form

// creating document or insert
const createDocument= async () => {
    try{
        const details1= new Details({
            name:"amit das",
            email:"amit1@gmail.com",
            active:true
        })
        // first method to save the data
        //details1.save() this will save the current details

        const details2= new Details({
            name:"tarun das",
            email:"tarun1@gmail.com",
            active:false
        })

        const details3= new Details({
            name:"rajesh das",
            email:"rajesh1@gmail.com",
            active:true
        })

        const result=await Details.insertMany([details1,details2,details3]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

createDocument();