//JS scope

// code name working in this scope
// reduce the naming conflict, improve the program reliability
//global scope , local scope
//global scope, the whole script tag or a script file
//local scope : in a function scope
var num = 10
console.log(10)
function fn() { 
  var num = 20
  console.log(num)
  var num1 = 30
}
fn()

//console.log(num1)
// based on the scope , we have global variable and local variable

// if in a function, without declaration , just assign a value, it's also a global variable  // do not use this 
// arguments also the local variable
// the effectiveness,  the global var only destroyed when the browser closed, will block the RAM, 
//local variable when function done will be destroyed
// in ES5 , we don't have block scope , in ES6 we will have 
// if (3 < 5) { 
//   var num2 = 55
// }
// console.log(num2)

//scope chaian
var prop1 = 1111
function fn1() { 
  var prop1 = 2222
  function fn2() { 
    console.log(prop1)
  }
  fn2()
}
fn1()
