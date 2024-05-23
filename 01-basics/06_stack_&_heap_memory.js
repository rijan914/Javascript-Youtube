// stack (primitive), heap (non -primitive)
//STACK(PRIMITIVE ) provides copy but heap provides reference of original value and changing the value make change in original value 

let myYoutubename= "rijanbhandari.com"

let anotherName= myYoutubename
anotherName="chaiaurcode.com"

console.log(myYoutubename)
console.log(anotherName)

let userOne= {
    email:"user@gmail.com",
    upi: "user@ybl"
}

let userTwo= userOne

userTwo.email="salman@google.com"

console.log(userOne.email)
console.log(userTwo.email)

//Conclusion: primitive values goes on stack and creates the copy 
// non primitive values goes on heap and any changes made will affect the original value (get reference)
