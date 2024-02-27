let user={username : "prashant gupta",
         charges:699,
         welcomeMessage: function(){
            console.log(`${this.username} , you are logged in `)
            console.log(this)
         }
}

console.log(user.username)
console.log(user.welcomeMessage())

console.log(this)

function one(){
    username="prashant gupta"
    console.log("hello ",user.username)
}


one()