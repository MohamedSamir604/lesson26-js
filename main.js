// Number  Chalenge 

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
//Find Smallest Number in All Variables and return  integer
console.log(Math.floor(Math.min(a,b,c,d)));
console.log(Math.trunc(Math.min(a,b,c,d)));
console.log(Math.round(Math.min(a,b,c,d)));

// Use Varible a + d One Time To get the Needed Output

console.log(a **(Math.trunc(d))) //10000

//get Integer "2" from d Varivble with 4 Methods
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log(d.toFixed());

//Use Varibles b + d To Get this Values

console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)) //66.67 => string
console.log(parseInt((Math.trunc(b) / Math.ceil(d)).toFixed())) //67 => Number