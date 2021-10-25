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
//2
// console.log(num)
// var num = 10
// equal to 
//var num
//console.log(num)
//num =10

// function hoisting , hoist the function declaration to current scope's top, but never call this function





// var val = 'str1'
// function a() { 
//   console.log(val)
//   var val = 'str2'
// }
// a()

// function f1() { 
//   var a = b = c = 9
//   // var a = 9 , b= 9 ,c =9
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }
// f1()
// console.log(c)
// console.log(b)
// console.log(a)