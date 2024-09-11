// const EventEmitter = require("events");

// const event = new EventEmitter();
// const event2 = new EventEmitter();


// event.on("checkpage",(sc,msg)=>{
// console.log(`the status is ${sc} and message is ${msg}`)
// });
// event.on("checkpage",(sc,msg)=>{
//     console.log(`the status is ${sc} and message is ${msg} amd this is 2nd time im telling`)
//     });

// event2.on("Names", (firstName)=>{
//     console.log(firstName);
// })


// event.emit("checkpage", 200, "OK");
// event2.emit("Names", "Srijan");




const EventEmitters = require("events");

const event = new EventEmitters();
const event2 = new EventEmitters();



event.on("checkpage",(sc,msg)=>{

    console.log(`the status is ${sc} and message is ${msg}`)
})


event.emit("checkpage",200,"ok");