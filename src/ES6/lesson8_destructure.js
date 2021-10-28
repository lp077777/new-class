//Array destructure
let arr = ['hello', 'world', 'kkkk', 'ddd']
//ES5
// let firstOne = arr[0]
// let secOne = arr[1]
//ES6
// let [firstOne, secOne] = arr
// console.log(firstOne, secOne)
//Array|Object 
// how to get the third one 
// let [firstOne, , thirdOne] = arr
// console.log(firstOne, thirdOne)
// let str = 'abcde'
// let [fisrt, , third] = str
// console.log(fisrt, third)
//not only str or array , everything traversable
let [fisrt, , third] = new Set([1,2,3,4,5,6])
console.log(fisrt, third)

let user = { name: "john", age: 18 }
//ES5 
user.name = 'aaa'
user.age = 20
//es6
[user.name, user.age] = [1, 2]
console.log(user)
for (let [k, v] of Object.entries(user)) { 
  console.log(k,v)
}

let [firstOne, secOne, ...last] = arr
console.log(firstOne, secOne, last)

let newArr = []
let [newOne = '111', second, ...rest] = newArr
console.log(newOne, second, rest)
//Obj destructure

let options = {
  title: '123',
  width: 100,
  height: 200,
  data: 'aaa',
  date:"2021-2-22"
}
let { title, width, height,...lastProps } = options
console.log(title, width, height)
console.log(title, lastProps)

let newData = {
  size: { width: 200, height: 300 },
  items: [1, 2, 3, 4],
  extra: true,
  skills: 'js'
}
let { size: { width:width2 }, items:[item1] ,...restProps} = newData
console.log(width2,item1,restProps)