//operator

//+ - * / %
console.log(1 + 1)
console.log(1 - 2)
console.log(2 * 2)
console.log(12 / 3)
console.log(9 % 2)
console.log(3 % 5)

//will have problem in float
console.log(0.1 + 0.2) 
console.log(0.07 * 100) //don't calculate float directly
//cannot compare the float
console.log(0.1 + 0.2 === 0.3)

// want a variable add 1 itself
var num1 = 1
num1 = num1 + 1
console.log(num1)

//we can use ++ & -- to add 1 or -1 itself , ++ & -- left or right , pre add operator / post add operator
//must using with varaible

var age = 10
++age
console.log(age)

// ++ before the variable, add 1 itself first , then return 

var age1 = 10
age1++
console.log(age1)

// preadd and post add if used independ , it's same 

var age2 = 10
console.log(age2++ + 10) //20 return result first then add 1 itself
 
//test

// var a = 10
// ++a
// var b = ++a + 2
// console.log(b)

// var c = 10
// c++
// var d = c++ + 2
// console.log(d)

// var e = 10
// var f = e++ + ++e
// console.log(f)

//post add always return first then add itself

