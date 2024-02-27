// function calculateCartPrice(num1){

//     console.log(num1)

// }

// calculateCartPrice(200,400,500) // o/p : 200

function calculateCartPrice(val1,...num1){

    console.log(val1,num1)

}

calculateCartPrice(200,400,500) // o/p : [ 200, 400, 500 ]

// object passed as an argument in function

const aboutMe={
    name:"prashant gupta",
    age:23,
    email:"gupta05prashant@gamil.com",
    edu:"Btech"
}
const aboutMe2={
    name:"Aish",
    age:23,
    email:"gupta05prashant@gamil.com",
    edu:"Btech"
}

function myIntroduction(funInside){

    console.log(funInside.name,funInside.age,funInside.email,funInside.edu)
    //console.log(funInside.name,funInside.age,funInside.email,funInside.edu)
    //console.log(aboutMe.age)


}

myIntroduction(aboutMe)
myIntroduction(aboutMe2)
myIntroduction({
    name:"prashant gupta",
    age:23,
    email:"gupta05prashant@gamil.com",
    edu:"Btech"

})

//now we use array in function

myArray=[100,200,300]

function functionArray(getArray){
    return getArray[1]
}

const a=functionArray(myArray)
console.log(`a=${a}`)


