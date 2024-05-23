//primitive and non premitive

// Primitive 
// 7 types: string ,number,boolean , null ,undefined,symbol,BigInt

//JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime
const score = 100
const scoreValue = 100.3

const isLoggedIn=false
const outsideTemp= null
let userEmail=undefined;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)

const bigNumber =  233423423434n
//n means bigInt


//Reference type (non primitive)
//array , objects ,functions 

const heros= ["shaktiman", "naagraj","doga"];

//objects are in curly brackets {}
let myObj={
    name: "rijan",
    age:22,
}

//function 
const myFunction  =function(){
    console.log("Hello World")
}


console.log(typeof bigNumber) //bigint
console.log(typeof outsideTemp)
console.log(typeof scoreValue)
//null : object
console.log(typeof myFunction) //called as object function

//* Premitive Datatypes

//                Type                                   typeof

// i)             Number                               number
// ii)            String                                   string
// iii)           Boolean                               boolean
// iv)           Bigint                                   bigint
// v)            Symbol                                symbol
// vi)           Null                                      object
// vii)          Undefined                           undefined


// * Non-Premitive OR Referance OR Object datatype

//                   Type                                   typeof

// i)               Object                                object
// ii)              Array                                  object
// iii)             Function                            function(object)