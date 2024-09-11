const fs= require("fs");

fs.mkdir("Challenge 2 Project",(err)=>{
    // console.log(err);
});
fs.writeFile("Challenge 2 Project/read.txt","hello everyone",(err)=>{
// console.log(err);
});
fs.appendFile("Challenge 2 Project/read.txt"," Appended data",(err)=>{
    // console.log(err);
})


fs.readFile("Challenge 2 Project/read.txt","utf-8",(err,data)=>{
    // console.log(data);
})


fs.rename('Challenge 2 Project/read.txt','Challenge 2 Project/New Challenge 2',(err)=>{
    if(err)
        console.log(err);
    
})

// fs.unlink('Challenge 2 Project/New Challenge 2',(err)=>{

// });

// fs.rmdir("Challenge 2 Project",(err)=>{
// }    );



fs.writeFile("New file.txt","new file content",()=>{});

fs.appendFile("New File.txt","appended data",
    ()=>
        {}
)

fs.readFile("New File.txt","utf-8",(err,data)=>{
    console.log(data)
})

fs.rename("New File.txt","renamed.txt",()=>{

})

fs.unlink("renamed.txt",()=>{})