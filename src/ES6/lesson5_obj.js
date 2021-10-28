let x = 1
let y = 2
let z = 3

// let obj = {
//   x, y,
//   hello: function () { 
//     console.log('hello')
//   }
// }
// console.log(obj)
// //ES5
// obj[z] = 5 
// //ES6
// console.log(obj)
// let obj = {
//   x, y, [z]:6
// }
// console.log(obj)
//function in ES6
// let obj = {
//   x, y, [z]: 6,
//   hello() { 
//     console.log('hello')
//   }
// }
// ES5 cannot add async in obj, but ES6 can 
// let obj = {
//   x, y, [z]: 6,
//   *hello() { 
//     console.log('hello')
//   }
// }

//new data type to store data
//Set all value is unique
// let s = new Set()
let s = new Set([1, 1, 2, 3, 4, 5,5,5,5,5,5, 6]) // all trasversable data can all in Set, not only array
 s.add('hello').add('test').add('hello')

// s.delete('hello')

// s.clear()
// console.log(s)
// console.log(s.has('hello'), s.size)
// console.log(s.keys(), s.values())
//console.log(s.entries())
// s.forEach(item => { 
//   console.log(item)
// })
// for (let item of s) { 
//   console.log(item)
// }

//Map
// let map = new Map([[function () { }, 2], [3, 4]])
// console.log(map)
//let map = new Map([[1, 2], [3, 4]])
//in map key can be anything
let map = new Map()
map.set(5, 'value-4')
map.set(1, 'value-2')

map.set(3, 'value-6')

// // map.set(1, 3)
//map.delete(1) // based on key 

// map.clear()
console.log(map)
console.log(map.size, map)
console.log(map.has(1)) // fasle , map is looking for key , not value
console.log(map.get(1))
// console.log(map.keys(),map.values(),map.entries())
// map.forEach((value, key) => { 
//   console.log(value,key)
// })

for (let [key, value] of map) { 
  console.log(key,value)
}
// the loop it's not based on index, baesd on the set order

//obj assignment
//ES5 how to copy

const target = {}
const source = { b: 4, c: 5, d: { e: {f:5}} }
Object.assign(target, source)
console.log(target)
const target1 = { b: 5, c: 11, d: { e: { f: 121 } }, h: 1212 }
Object.assign(target1, source)
//assign cannot do deep copy