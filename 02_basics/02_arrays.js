// PUSH VS CoONCAT vs Spread
const marvel_heros = ["Thor", "Iron Man", "Spider Man"]
const dc_heros = ["Flash", "Super Man", 'Bat Man']
// PUSH
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// CONCAT
// all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)
// SPREAD ...array
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);
// flat
const another_array = [1,2,3,[4,5,6], 7,8, [9, [10, 11]], 12]
const flatted_array = another_array.flat(Infinity)
console.log(flatted_array);