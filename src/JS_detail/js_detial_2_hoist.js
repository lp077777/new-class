//hoist
//1
// console.log(num)
//2
// console.log(num)
// var num = 10
//3
// fn()
// function fn() {console.log('fn') }
//4
// fn2()
// var fn2 = function () { console.log('fn2')}


// JS pre-analysis 
// js code running in browser JS engine
// pre-analysis
// hoist : js engine will hoist all var and function hoist to current scope's top
//code running, line by line
// variable hoisting ,  only hoist the var , but not the value assignment








// var val = 'str1'
// function a() { 
//   console.log(val)
//   var val = 'str2'
// }
// a()