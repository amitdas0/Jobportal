const express = require('express'); //importing express

const router = express.Router(); //importing router


const signup = require('../model/signup'); // importing signup.js to our file 

const contactus = require('../model/contactus'); // importing contact.js to our file 

const addjob = require('../model/addjob'); // importing addjob.js to our file 
// const registerSchema = require('../model/signup');

const multer = require('multer') //importing multer
// const {v4: uuidv4} = require('uuid') // binary way for image upload



// router.get('/',function(req,res){
//     // res.send("hello world");
//     res.render('index');

// });

router.get('/', async (req,res) =>{
    try{
        const regdata = await addjob.find({});
    
res.render('index' ,{regdata:regdata});
console.log(regdata);
    } catch (err) {
        console.log(err);
    }

});



router.get('/about_us',function(req,res){
        // res.send('about us page 7868');
    res.render('about_us');

    })


// signup page
 router.get('/signupform',function(req,res){
        // res.send('about us page 7868');
    res.render('signupform');

    })

// now posting the  form for signup
router.post('/signup',(req,res) => {
    var sign_up={
        first_name:req.body.fname,
        last_name:req.body.lname,
        dob:req.body.dob,
        email:req.body.email,
        password:req.body.password,
        confirm_password:req.body.cpassword

    };
    var regpost=new signup(sign_up);
    regpost.save()
          .then(() => 
        //   res.redirect('/login'))
        res.json('register successfully'))
        .catch(err => res.status(400).json('error:' +err));
});



// contact us page
router.get('/contact_us',function(req,res){
    // res.send('about us page 7868');
res.render('contact_us');

})

// now posting the  form for contact us
router.post('/contact',(req,res) => {
    var contact_us={
        first_name:req.body.f_name,
        email:req.body.email,
        contact:req.body.contact,
        message:req.body.message,

    };
    var regpost=new contactus(contact_us);
    regpost.save()
          .then(() => 
        //   res.redirect('/login'))
        res.json('register successfully2'))
        .catch(err => res.status(400).json('error:' +err));
});

//file uploading 
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload');
    },

    filename: function (req, file, cb) {
        cb(null,file.originalname);
        // cb(null, uuidv4()+'-'+ Date.now() + path.extname(file.originalname))// Appending .jpg
    }

});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg' ,'image/png', 'image/webp'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);

    } else {
        cb(null, false);
    }
}

let upload = multer({storage, fileFilter});


// now posting the  form for addjob
router.post('/addjob',upload.single('uploadfile'), (req,res) => {
    var add_job={
        jobtitle:req.body.Jobtitle,
        city:req.body.city,
        package:req.body.package,
        uploadfile:req.file.filename


    };
    var regpost=new addjob(add_job);
    regpost.save()
          .then(() => 
        //   res.redirect('/login'))
        res.json('register successfully3'))
        .catch(err => res.status(400).json('error:' +err));
});


// dashboard page
    router.get('/dashboard',function(req,res){
        // res.send('about us page 7868');
    res.render('dashboard/index');

    })

// add job page
    router.get('/add-job',function(req,res){
        // res.send('about us page 7868');
    res.render('dashboard/addjob');

    })

    

// view get api
    router.get('/view-query', async (req,res) =>{
        try{
            const regdata = await signup.find({});
        
    res.render('dashboard/viewquery' ,{regdata:regdata});
    console.log(regdata);
        } catch (err) {
            console.log(err);
        }

    });

    // contactus ejs
    router.get('/contact', async (req,res) =>{
        try{
            const regdata = await contactus.find({});
        
    res.render('dashboard/contact' ,{regdata:regdata});
    console.log(regdata);
        } catch (err) {
            console.log(err);
        }

    });

    // viewproduct ejs
    router.get('/viewproduct', async (req,res) =>{
        try{
            const regdata = await addjob.find({});
        
    res.render('dashboard/viewproduct' ,{regdata:regdata});
    console.log(regdata);
        } catch (err) {
            console.log(err);
        }

    });

    // edit jobs MAIN
    router.get("/update_jobs/:id" , async (req ,res) => {
        try{
            const regdata = await addjob.findById(req.params.id);
            res.render('./dashboard/edit_job', {regdata: regdata});

            console.log(regdata);
        } catch (err) {
            console.log(err);
        }
    });

    //post edit jobs
    router.post("/update_jobs/:id",upload.single('uploadfile'), async (req, res) => {
        const itemId = req.params.id;

        const updatedData={jobtitle:req.body.Jobtitle,
                         city:req.body.city,
                         package:req.body.package,
                         uploadfile:req.file.filename}

        try {
            const updatedItem = await addjob.findByIdAndUpdate(itemId,updatedData ,{new:true});

            if(!updatedItem){
                return res.status(404).json({message:'Item Not Found'});
            }

            res.redirect('/viewproduct');
        }

        catch (err) {
            res.status(500).json({message:'server error'});
        }

    })

    // edit api for registration page
    router.get("/update_jobs2/:id" , async (req ,res) => {
        try{
            const regdata = await signup.findById(req.params.id);
            res.render('./dashboard/edit_registration', {regdata: regdata});

            console.log(regdata);
        } catch (err) {
            console.log(err);
        }
    });

    //post update registration
    router.post("/update_jobs2/:id", async (req, res) => {
        const itemId = req.params.id;

        const updatedData={first_name:req.body.fname,
                           last_name:req.body.lname,
                           dob:req.body.dob,
                           email:req.body.email,
                           password:req.body.password,
                           confirm_password:req.body.cpassword
    }

        try {
            const updatedItem = await signup.findByIdAndUpdate(itemId,updatedData ,{new:true});

            if(!updatedItem){
                return res.status(404).json({message:'Item Not Found'});
            }

            res.redirect('/view-query');
        }

        catch (err) {
            res.status(500).json({message:'server error'});
        }

    })
   

    //delete api for view query

    router.get("/delete/:id" , async (req ,res) => {
        try{
            const regdata = await signup.findByIdAndDelete(req.params.id);
            res.redirect('/view-query');
        } catch (err) {
            console.log(err);
        }
    });


    //delete api for view contact

    router.get("/delete2/:id" , async (req ,res) => {
        try{
            const regdata = await contactus.findByIdAndDelete(req.params.id);
            res.redirect('/contact');
        } catch (err) {
            console.log(err);
        }
    });

    //delete api for view product

    router.get("/delete3/:id" , async (req ,res) => {
        try{
            const regdata = await addjob.findByIdAndDelete(req.params.id);
            res.redirect('/viewproduct');
        } catch (err) {
            console.log(err);
        }
    });


     // edit product details
     router.get("/productdetails/:id",  async (req ,res) => {
        try{
            const jobdata = await addjob.findById(req.params.id);
            res.render('productdetails', {jobdata: jobdata});

            console.log(regdata);
        } catch (err) {
            console.log(err);
        }
    });


    //login api
    router.post('/login', async (req, res) => {
        var email = req.body.email,
            password = req.body.password;

        try {
            var login = await signup.findOne({email: email})
            .exec();
            if(!login) {
                res.redirect('/');
            }
            login.comparePassword(password,(error, match) => {
                if(!match) {
                    res.redirect('/')
                }
            })
            res.redirect('/dashboard')
        } 
        catch (error) {
            console.log(error)
        }
    
    });

    

    
    // connecting database to server












module.exports = router;  //exporting router