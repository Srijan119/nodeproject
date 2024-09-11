const fs = require("fs");
const http = require('http');



const server = http.createServer();
 
server.on("request",(req,res)=>{

//1st way

  // fs.readFile('./input.txt','utf-8', (err,data)=>{
  //   res.end(data);
  // })

  //2nd way

const rstream = fs.createReadStream("input.txt");
rstream.on("data",(chunkdata)=>{
  res.write(chunkdata);
})
rstream.on("end",()=>{
  res.end();
})
rstream.on("error",(err)=>{
  res.end(err);
});
 

  // 3rd way
  // readstream.pipe(res);


})






server.listen(8000, '127.0.0.1');