// Primitive
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

// References (Non Primitive)
// Array, Objects, Functions
const heros = ["Shaktiman", "Junior G", "Hatim Tai"]
let myObj = {
    name : "Hitesh",
    age: 22
}
const myFunction = function(){
    console.log("Hello Function")
}
// SYMBOL
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)