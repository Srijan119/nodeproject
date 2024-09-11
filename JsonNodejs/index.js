const data = {
    name:"srijan",
    age:23,
    address: "UP"
}

const data2 = {

    cred:'dck',

    place:'manka',
    address:'nfeid'
}

// const JsonData = JSON.stringify(data);
// // console.log(JsonData);
// const objData = JSON.parse(JsonData);
// // console.log(objData)
// // console.log(objData.name);

// const fs = require('fs');
// fs.writeFile("jsonData.json",JsonData,(err)=>{
// })

// fs.readFile("jsonData.json","utf-8",(err,data)=>{
//     console.log(JSON.parse(data));
// })



console.log(`1==> ${JSON.stringify(data2)}`);

console.log(JSON.parse(JSON.stringify(data2)));

const fs = require('fs');

fs.writeFile("jsonda.json",JSON.stringify(data2),()=>{

}
)

fs.readFile("jsonda.json","utf-8",(err,data)=>{
console.log(JSON.parse(data));
})
