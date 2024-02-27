function parent()
{
    let a=10;
    function child()
    {
        console.log(a)
        let b=20;
    }
    
    // console.log(b)     "b is not defined"  this creates an error because it does not comes into an scope. 
    child()
    
}
parent()




if(true)
{
    let username="prashant"

    if(username === "prashant")
    {
        let website="prashant.com"
        console.log(`${username}  ${website}`)
    }

    // console.log(username + website) o/p :    "website is not defined" this error comes becase we cannot excess local variable outside the scope

}

//console.log(username)   "username is not defined" this error comes becase we cannot excess local variable outside the scope
//console.log(website)   "website is not defined" this error comes becase we cannot excess local variable outside the scope


// +++++++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++++++++++++++++

//1st way of declaring function

console.log(addone(5))

function addone(num)
{
 
    num=num+1
    return num
}

//console.log(addone(5))  no error it runs comfortably


//2nd way of declaring function 

// console.log(addTwo(9))  Cannot access 'addTwo' before initialization 

let addTwo = function(num)
{
    num=num+2;
    return num
}

console.log(addTwo(9))

