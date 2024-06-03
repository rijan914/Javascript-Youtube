// singleton object
// const appUser = new Object()
// console.log(appUser);
const appUser={} // non singleton object

appUser.id = "123ABC"
appUser.name = "Rijan"
appUser.email= " avengers@gmail.com"
appUser.isLoggedIn = false

//object inside object 
const regularUSER = {
    email:"sita@gmail.com",
    fullname:{
        userfulname:{
            firstname:"Karishma",
            lastname: "Thapa"
         }
    }
}

// console.log(regularUSER.fullname?.userfulname.lastname);

//object concatenation
const obj1 = {1:"a", 2:"b"}
const obj2 = {3: " c",4:"d"}

// const obj3= { obj1,obj2} 
const obj3= Object.assign({},obj1,obj2)

const obj4= {...obj1,...obj2} //spread and combine

const users = [
    { 
        id:1,
        email:"h@gmail.com"

    },
   
    { 
        id:1,
        email:"h@gmail.com"

    },
]
users[1].email
// console.log(appUser)

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));

console.log(appUser.hasOwnProperty('isLoggedIn'));

