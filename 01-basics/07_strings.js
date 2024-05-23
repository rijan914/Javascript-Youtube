const name="rijan" 
const repoCount = 50

console.log(name+repoCount+" value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gamename =new String('rijannn')

console.log(gamename[0])
console.log(gamename.__proto__);

console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.toLowerCase())

console.log(gamename.charAt(3)) 
console.log(gamename.indexOf('a'))


//****SLICING  */
const newString =gamename.substring(0,4) //0 to 3 (total 4 characters)
console.log(newString)

const anotherString =gamename.slice(0,2)
console.log(anotherString)
const another2String =gamename.slice(-8,3)
console.log(another2String)

const newStringOne="   hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://rijan.com/photography%20broo"
console.log(url.replace('%20',"-"))
console.log(url.includes('sunday'))


console.log(gamename.split('-'))
