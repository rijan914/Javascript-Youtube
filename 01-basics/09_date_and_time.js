// // //dates

// // let myDate = new Date()
// // console.log(myDate.toString());

// // console.log(myDate.toLocaleString())
// // console.log(myDate.toDateString())
// // console.log(typeof(myDate)) // object 

// // let myCreatedDate = new Date(2023, 0 , 23)
// // console.log(myCreatedDate.toString())
// // months start from  0 

// // let myCreatedDate = new Date("2023-01-13")
// // console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

// // dd mm yy garesi 1 batw start hunxa 
// // single digit ma lekhesi 0 batw start hunxa cause array 

// let myTimeStamp = Date.now
// // console.log(myTimeStamp())
// // console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000) )// changing into milliseconds 

let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getHours())
console.log(newDate.getFullYear())

// `${newDate.getDay()} and the time`

newDate.toLocaleDateString('default', {
    weekday: "long"

})