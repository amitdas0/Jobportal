const mongoose=require('mongoose');

const listSchema2 = new mongoose.Schema({

    //this will define first name of user in signup form
    first_name:
        {type:String,
        unique:true,
        required:true

    },

    //this will define email of user in signup form
    email:
        {type:String,
        unique:true,
        required:true

    },

    //this will define contact of user in signup form
    contact:
        {type:Number,
        unique:true,
        required:true

    },

    //this will define first name of user in signup form
    message:
        {type:String,
        unique:true,
        required:true

    }
})

const registerSchema = new mongoose.model("contactus" ,listSchema2);
module.exports=registerSchema;
