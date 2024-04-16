// how to create variable and print

// var a = 10;
// var b = 10;
// var c = 10;
// var sum = a + b + c; 
// console.log(sum);
// console.log("hello world");

// var check = (a,c)=>{
//     console.log("the sum of two number is: ",a+c);
// };

// check(a,c);

// run on server side
// var http=require('http');
// http.createServer(function(req , res){
//     res.write('<h1> Hello my name is Amit</h1>');
//     res.write(' Hello this is server 1');
//     res.write('Hello this is server 2');
//     res.end(); // this will end the statement

// }).listen(1200);


// creating own module

// var add=require('./my_module');
// console.log(add(10,100));

var http=require('http');
var dt= require('./my_module');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("Currently the date  and the time is "+dt.myDateTime());
    res.end();
}) .listen(6090);
