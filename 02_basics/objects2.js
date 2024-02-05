//const tinderUser=new Object() //this is a constructor form of object. this is a singleton object.
const tinderUser={} // this is a literal form of object. this is not a singleton object.
console.log(tinderUser)

tinderUser.id="abc123"
tinderUser.name="prashant gupta"
tinderUser.isLoggedIn=false

//console.log(tinderUser)
//console.log(typeof tinderUser.isLoggedIn)

const regularUser={
    email:"prashant@12345",
    fullname:{
        userfullname:{
            firstname:"prashant",
            lastname:"gupta"
        }
    }
}

console.log(regularUser)
console.log(regularUser.email)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2} //1st way
//const obj3= Object.assign(obj1,obj2) // 2nd way
const obj3= Object.assign({},obj1,obj2) // 2nd way

console.log(obj3) //in this way the two objects stores in the third object (obj3) as two object o/p:{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// console.log(obj3===obj2)
// console.log(obj1)
// console.log(obj3)


console.log(tinderUser) 
console.log(Object.keys(tinderUser)) //by using this we can return only keys of the object in the form of array
console.log(Object.values(tinderUser)) //by using this we can return only values of the object in the form of array
console.log(Object.entries(tinderUser)) //by using this we can return the key value pairs in the form of array
const ent=Object.entries(tinderUser)
console.log(ent[1][1])



