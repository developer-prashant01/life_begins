const score=400.987
console.log(typeof(score))

let balance=new Number(score)
console.log(balance+" "+ typeof(balance))
console.log(typeof score)

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)
console.log(Math.abs(-90))
console.log(score.toFixed(2))
console.log(score.toPrecision(4))
console.log(Math.round(score))
let hundreds=10000000;
console.log(typeof hundreds)
console.log(hundreds.toLocaleString())
console.log(typeof(hundreds.toLocaleString('en-IN')))
let num=hundreds.toLocaleString('en-IN')
console.log(typeof hundreds)
console.log(typeof num)
let num1=Number(num);
console.log(typeof num1)
