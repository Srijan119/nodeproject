const fs = require("fs");
// fs.writeFile("new.txt","welcome",(err)=>{
// console.log("yes");
// console.log(err);
// });

// fs.appendFile("new.txt"," hi",(err)=>{

// });


fs.readFile("new.txt","utf-8",(error,data)=>{
    console.log(data);
})

console.log("hbjnkml");


//here we see async nature ... we dont have to wait for one step to complete and then execute the other step
