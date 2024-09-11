const fs = require("fs");
const http = require("http");
const { dirname } = require("path");

const server = http.createServer((req,res)=>{

    if(req.url === "/"){
        res.end("hello");
    }
    else if(req.url === "/data"){

        fs.readFile(`${__dirname}/UserData/UserData.json`, "utf-8",(err,data)=>{
            const objData = JSON.parse(data);
            // res.end(objData[0].name);
            res.end(data);
        })
    }
    else{
        res.writeHead("402", "Content-type : Application/json");
        res.end("<h1> 403 INvalid request </h1>")
    }
})


server.listen(8000,"127.0.0.1", ()=>{
})

