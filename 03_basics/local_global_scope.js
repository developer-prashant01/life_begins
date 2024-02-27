let a=10
const b=20
// var c=30   //the value of var c=30 can we changed from anywhere in the code either from the inner code or outer code.

if(true)
{
    let a=40
    console.log("hello" + a)  // o.p = hello40 here the inner block value of "a" is print as 40 
    const b=20
    var c=30
    let d=90
}

console.log(a)
console.log(b)
//console.log(c)
//console.log(d)  // in this case "d is not defined" -> this error is comming because d is declared into the inner block.