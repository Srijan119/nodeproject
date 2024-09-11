const chalks = require("chalk");
const validator = require ( "validator");

console.log(chalks.red.underline.inverse("hi world"));

const res= validator.isEmail("snjgmail@cf.com");
console.log(res? chalks.green.inverse(res): chalks.red.inverse(res));