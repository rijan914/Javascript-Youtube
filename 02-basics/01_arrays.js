// array 

const myArr = [0, 1,2,3,4 ,5]
const myHeros = [ "shaktiman ","naagraj","spiderman"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0])
// console.log(myArr[1])

// // array methods
// myArr.push(6)
// console.log(myArr);

// myArr.push("rijann")
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9) 
// // place 9 in the start of the array 
// myArr.shift()
// // removes the first  value of the array 
// console.log(myArr);

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr = myArr.join() // values same but the types will be changed 
// console.log(myArr);
// console.log(typeof(myArr));
// console.log(newArr)
// console.log(typeof(newArr)) // object to string 


// slice , splice 

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)

console.log("C",myArr)
console.log(myn2)
//difference between slice and splice is 
//slice doesnt changes the original array but splice changes the original array 
//slice just cuts out certain portion(thinking as like an cake )
//splice change the contents of an array by removing or replacing existing elements and/or adding new elements. I

console.log(myArr.splice(2,0,"RIJAN"))
console.log(myArr)