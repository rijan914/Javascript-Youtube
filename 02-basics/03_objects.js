//objects 

//singleton 
// Object.create  // constructer // singleton

// object literals 

//symbol
const mySym =Symbol("key1")


const JsUser= {
    name: "rijan",
    "full name":"Rijan Bhandari",
    [mySym]: "myKey1",
    age : 99 ,
    location : "Spain",
    email : "rijanbhandari14@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

 }
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"]) // best way

console.log(JsUser[mySym])
console.log(typeof(JsUser[mySym]) )

JsUser.email = "chatgpt@gmail.com"
// Object.freeze(JsUser)
JsUser.email ="rijan@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user")

}
JsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`); //string interpolation

}
console.log(JsUser.greeting) // undefined
console.log(JsUser.greeting()) // not a function needed to unfreeze 
console.log(JsUser.greeting2()) // not a function needed to unfreeze 

 // we can define key and value 

