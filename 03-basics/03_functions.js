//  Global and local scope in javascript 

// let a = 10 
// const b = 20 
// var c = 30 

// var c=39
let a = 300 // global scope
if(true){
    let a = 40 
    const b = 50 
    console.log("inner",a) //block scoped 
    console.log(b)
}

console.log(a)
// console.log(b)

// var is function scoped but let and const are block scoped
// var can be redeclared but let and const cannot be redeclared
// var can be hoisted but let and const cannot be hoisted
// var can be reassigned but let and const cannot be reassigned
// var is window object but let and const are not window object
// var is not recommended to use but let and const are recommended to use
// var is used in ES5 but let and const are used in ES6