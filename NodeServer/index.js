// const http = require("http");


// const server = http.createServer((req,res)=>{

//     if(req.url === "/"){
//         res.write("welcome to main side");
//         res.end();
    
//     }

//     else if(req.url === "/info"){
//         res.end("welcome to info side");
//     }
//     else{
//         res.writeHead(404,{"Content-type":"text/html"});
//         res.end("<h1> 404 Error requested page not found </h1>");
//     }
    
// });


// server.listen(8000 , "127.0.0.1",()=>{
//     console.log("listening to port 8000");
// })


const http = require("http");

const server = http.createServer((req,res)=>{
       if(req.url === "/"){
        res.write("welcome to main side");
        res.end();
    
    }

    else if(req.url === "/info"){
        res.write("welcome to info side");
        res.end('more information side info');
    }

    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end('<h1> other page </h1>');
    }



});


server.listen(8000,"127.0.0.1",()=>{

});
