const name1 = "Hitesh"
const repoCount = 13

console.log(name1 + repoCount, " Value")

console.log(`Hello my name is ${name1} and my repo count is ${repoCount}`)
// Declare string as object
const gameName = new String('Asphalt-8')
console.log(gameName)
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));
const newString = gameName.substring(1, 4) // (start index, end index)
// console.log(newString);
const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);
const newStringOne = "   Asphalt  "
// console.log(newStringOne.trim());

const url = "https://abc.com/about%20page"
// console.log(url.replace('%20', '-'))
// console.log(url.includes('https'))
const gameNameSplit = gameName.split('-')
console.log(gameNameSplit);

