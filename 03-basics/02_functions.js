//functions with array and objects 
function calculateCartPrice(...num1){
    return num1 
}

console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "rijan",
    price: 300

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price : 333
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray)
{
    return getArray[1]

}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,100]));