function sayMyName(){
    console.log("p")
    console.log("r")
    console.log("a")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("n")
    console.log("t")
}

console.log(sayMyName())
//console.log(sayMyName)

function addTwoNumber(number1,number2){
    console.log(number1+number2)
    let result=number1+number2
    return result
    return number1+number2
}

const result=addTwoNumber(5,10)

console.log(`result= ${result}`)

// 1st case->

function lastLoggedIn(name){
    console.log(`${name} is last logged in`)
    
}

lastLoggedIn("prashant") // o/p : prashant is last logged in
lastLoggedIn("")  // o/p : is last logged in 
lastLoggedIn()    // o/p : undefined is last logged in 

// 2nd case ->

function lastLoggedIn(name="aish"){
    console.log(`${name} is last logged in`)
    
}

lastLoggedIn("prashant") // o/p : prashant is last logged in
lastLoggedIn("")  // o/p : is last logged in 
lastLoggedIn()    // o/p : aish is last logged in 

