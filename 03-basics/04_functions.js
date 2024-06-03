// Scope level and mini hoisting in javascript

//nested scope

function one(){
    const userName = "Rijan"
    function two(){
        const website = "youtube"
        console.log(userName);

    }
    // console.log(website);
    two()
    
}

one()

if(true){
    const userName = "rijan"
    if(userName === "rijan"){
        const website = " youtube" //this is block scoped 
        console.log(userName+website)
    }
    // console.log(website) // this will not work // block scoped
}
// console.log(userName) // this will not work // block scoped

/// ++++++++++++++++ interesting ++++++++++
console.log(addone(5))

function addone(num){
    return num+1
}

addTwo(5)
const addTwo = function(num){
    return num+2
}
// this will not work as hoisting is not possible in function expression
// function expression is not hoisted