// const sum = require("./ImpExp");


// console.log(sum(5,10));

// const modules = require("./ImpExp");

// console.log( modules.sum(5,10));
// console.log(modules.sub(10,5));
// console.log(modules.mult(10,5));


const {sum,sub,mult} = require("./ImpExp");
const {div_} = require("./ImpExp");
const {assemble} = require("./ImpExp");

console.log( sum(5,10));
console.log(sub(10,5));
console.log(mult(10,5));
console.log(div_(10,5));

console.log(assemble('srijan','srivastav'));


