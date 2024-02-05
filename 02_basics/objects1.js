const mySym=Symbol("myKey1")

const jsUser={
    name:"prashant",
    age:23,
    location:"Gwalior",
    email:"gupta05prashant@gmail.com",
    [mySym]:"key1"
}

// console.log(jsUser.name)
// console.log(jsUser["age"])
// console.log(jsUser["location"])
// console.log(jsUser["email"])
// console.log(jsUser["name"] + " "+jsUser["age"] + " "+jsUser["location"] + " "+jsUser["email"])
console.log(jsUser[mySym])
console.log(typeof(jsUser[mySym]))
console.log(typeof mySym)
console.log(jsUser)

jsUser["name"]="Mohit"
console.log(jsUser["name"])
//Object.freeze(jsUser)
jsUser["name"]="Naman"
console.log(jsUser["name"])


jsUser.greeting=function greet(){
    console.log("Hello js User")
   
}

// function greeting(){
//     console.log("Hello js User");
// }

jsUser.greeting2=function(){
    console.log(`Hello how are you ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())
console.log(jsUser)