 const score = 400 
 console.log(typeof(score))
console.log(score)

 const balance = new Number(100)
 console.log(balance)

 console.log(balance.toString().length);
 console.log(typeof (balance));

 console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(2))

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN')); //BASED ON INDIAN RUPEES 

// +++++++++++++ MATHS ++++++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-49.6))
console.log(Math.ceil(49.6)) //ceiling value 
console.log(Math.floor(496))
console.log(Math.sqrt(25))

console.log(Math.max(3,2,45,63))
console.log(Math.min(23,32,32,3,34,5,45))
console.log(Math.random()) // value ranges from 0 and 1 
console.log(Math.floor(Math.random()*10)+1) 
const min = 10 
const max = 20 
console.log(Math.floor(Math.random()* (max-min +1 ) )+min )