var nodeMailer=require('nodemailer');
var transport=nodeMailer.createTransport({
    host:'smtp.gmail.com', // simple mail transfer protocol
    port:587,
    secure:false,
    requireTLS:true, // tls is a way to provide secure connection between a client and server
    auth:
    {
        user:'amitraj1821234@gmail.com',
        pass:'wbff etwm ippo epum'
    }
});

var mailoptions={
    from:'amitraj1821234@gmail.com',
    to:'dheerajjeena930@gmail.com',
    subject:'node mail' ,
    text:'hello bro where you gone'
}

transport.sendMail(mailoptions,function(error,info){

    if(error)
    {
        console.log(error);
    }

    else{
        console.log('email sended successfully',info.response);
    }
})


