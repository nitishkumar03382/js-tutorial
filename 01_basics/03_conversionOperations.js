let score = 33
console.log(typeof(score))
// NaN
console.log("NaN Investigation");
score = "33abc"
let valInNum = Number(score)
console.log(typeof valInNum)
console.log(valInNum)
// null
console.log("NULL Investigation")
score = null
console.log(typeof score)
console.log(score)
valInNum = Number(score)
console.log(typeof valInNum)
console.log(valInNum)

// null
console.log("Undefined Investigation")
score = undefined
console.log(typeof score)
console.log(score)
valInNum = Number(score)
console.log(typeof valInNum)
console.log(valInNum)
/*
"33" => 33
"33ab" => NaN
null => 0
undefined => NaN
*/
// BOOLEAN CONVERSION
console.log("BOOLEAN Conversion Investigation")
let isLoggedInNum = -1 //0 -> False, else -> True
let boolIsLoggedIn = Boolean(isLoggedInNum)
console.log(boolIsLoggedIn)

let isLoggedInStr = "a" //"" -> False, else -> True
 boolIsLoggedIn = Boolean(isLoggedInStr)
console.log(boolIsLoggedIn)

let isLoggedInNull = undefined //null, undefined -> False
 boolIsLoggedIn = Boolean(isLoggedInNull)
console.log(boolIsLoggedIn)

// STRING Conversion
console.log("STRING Investigation");
let num = 33
let strNum = String(num)
console.log(strNum)
console.log(typeof strNum)

// *************** Operations ***************

