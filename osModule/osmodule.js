const os = require("os");
const os2 = require("os");
// const fs =require("fs");
// fs.unlink("index.js",(err)=>{});

// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir());
// console.log(os.type());


// const freememory = os.freemem();
// console.log(`${freememory/1024/1024/1024}`);

// const totalmemory = os.totalmem();
// console.log(`${totalmemory/1024/1024/1024}`);




console.log(os2.arch());
console.log(os2.hostname());
console.log(os2.platform());
console.log(os2.tmpdir());
console.log(os2.type());



console.log(`${os2.freemem()/1024/1024/1024}`)
console.log(`${os2.totalmem()/1024/1024/1024}`)