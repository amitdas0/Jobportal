const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const listSchema = new mongoose.Schema({
    //this will define first name of user in signup form
    first_name:
        {type:String,
        required:true

    },

    //this will define last name of user in signup form
    last_name:{
        type:String,
        required:true

    },
    
    //this will define date of birth of user in signup form
    dob:
         {type:Date
    },

    //this will define date of birth of user in signup form
    email:{
        type:String,
        required:true

    },

    //this will define password of user in signup form
    password:{
        type:String,
        required:true

    },

    //this will define confirm password of user in signup form
    confirm_password:{
        type:String,
        required:true

    }

    
})

listSchema.pre("save",function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = bcrypt.hashSync(this.password,10);
    next();
});

listSchema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, bcrypt.compareSync(plaintext, this.password));
};

// exporting modal

const registerSchema= new mongoose.model("signup",listSchema);
module.exports=registerSchema;
