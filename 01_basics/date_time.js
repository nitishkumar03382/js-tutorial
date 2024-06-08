// Dates
let myDate = new Date()
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

// let createDate = new Date(2023, 0, 23)
let createDate = new Date("06-06-2024")
console.log(createDate.toDateString());
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(createDate.getTime());
console.log(Math.floor(Date.now()/1000));
