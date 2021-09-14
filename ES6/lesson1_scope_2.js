{
  let a = 1
  console.log(a)
}
//console.log(a)
var b = 3
let c = 4
console.log(b, c)
console.log(window.b, window.c)

var b = 4
console.log(b)

//let c = 5 不允许重复定义 let will not variable promotion
console.log(c)

const d = 2
//d = 3 will cause issue
// const e
// e = 3  const cannot do like this , but var , let can 

//question 1
// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 3000)
// }
// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 3000)
// }