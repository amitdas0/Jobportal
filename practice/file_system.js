var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('demo.html',function(err,data){
        res.writeHead(200,{'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(9000)

// .readfile is used to read particular file ^ 

// var fs=require('fs');
// fs.appendFile('mynewfile1.html', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

  // .appendfile is used to add content if file not exist this will crate a new file ^

  // var fs=require('fs');
  // fs.open('mynewfile1.txt','w', function(err,file){
  //   if (err) throw err;
  //   console.log('saved!');
  // });

  // .fs open is used to open a file if does't exist it will crate an empty file ^

  // var fs=require('fs');
  // fs.writeFile('mynewfile1.txt','hello im content', function(err){
  //   if (err) throw err;
  //   console.log('saved!');
  // });


  // .fs writeFile is used to write in existing file ^


  // var fs=require('fs');
  // fs.unlink('mynewfile1.txt', function(err){
  //   if(err) throw err;
  //   console.log('file deleted !!');
  // });

  // fs.unlink is used to delete a file ^

  // var fs=require('fs');
  // fs.rename('mynewfile1.html','newfile1.html',function(err){
  //   if(err) throw err;
  //   console.log('File Renamed !!');
  // });




