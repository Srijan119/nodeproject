
let sum=(a,b)=>{
    return a+b;
}

let sub = (a,b)=>{
    return a-b;   
}

let mult = (a,b) =>{
    return a*b;
}

 let div = (a,b)=>{
    return a/b;
 }

 let assemble = (a,b )=>{
    return `${a} ${b}`;
 }
// module.exports = sum; // only if there is one export

// module.exports = { sum , sub, mult}
module.exports.assemble = assemble;

module.exports.sum = sum;
module.exports.sub = sub;
module.exports.mult =mult;

module.exports.div_= div;




