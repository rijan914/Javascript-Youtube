

function sayMyName(){
    console.log("r");
    console.log("i");
    console.log("v");
    console.log("n");
    console.log("a");
    console.log("j");
}

sayMyName() //reference // execution

// function addTwoNumbers(number1 , number2)//parameters 
// {
//     console.log(number1 + number2);

// }
function addTwoNumbers(number1 , number2)//parameters 
{
//    let result = number1+number2
//    return result
//     console.log("rijan") //unreacheable code
    return number1+number2

}

const result = addTwoNumbers(3,2) //arguments 
// console.log("result",result)
// addTwoNumbers("3","2")
// addTwoNumbers("3",null)


function loginUserMessage(username="sam")
{//username === undefined
    if(!username)
    {
        console.log("please enter a username");
        return 
    }
    return`${username} just logged in`  //using string interpolation
}
console.log(loginUserMessage("Rijan"))
// console.log(loginUserMessage())
