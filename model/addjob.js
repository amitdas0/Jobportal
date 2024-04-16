const mongoose=require('mongoose');

const listSchema3 = new mongoose.Schema({
    //this will define job title in add job form
    jobtitle:
        {type:String,
        required:true

    },

    //this will define city in add job form
    city:{
        type:String,
        required:true

    },
    
    //this will define package in add job form
    package:
         {type:String,
          required:true
    },

    uploadfile:
         {type:String,
          required:true
    }


    
})

// exporting modal

const registerSchema3= new mongoose.model("addjob",listSchema3);
module.exports=registerSchema3;
