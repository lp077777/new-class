//data type

//why we need different data type, because different type require different storage in RAM, fully and efficient use the RAM
//becuase js is a dynamic language

//int num = 10 ;java
var num 
//still don't know what is the num type. only when var num = 10 , the num is number type, which also means the variable type can be changed
var x = 10 // x is number
x = 'red' // x is string


// two types 1.simple type (Number:0; 0.12, String:"", Boolean:false, Undefined, Null)   2. complex type (object)
var number = 10 // Number
var pi = 3.1415926 // Number
// var num1 = 010
// // octal but should not use in strict mode
// console.log(num1)

//hexadecimal
// var num2 = 0x9
// var num3 = 0xa
// console.log(num2, 'num2')
// console.log(num3, 'num3')

// max value and min value
// console.log(Number.MAX_VALUE, 'MAX VALUE')
// console.log(Number.MIN_VALUE, 'MIN Value')

//3 special number 
// console.log(Number.MAX_VALUE * 2)
// console.log(-Number.MIN_VALUE * 2)

//NaN not a number
console.log(undefined - 100)

// isNaN to check the number

console.log(isNaN(2),'isNaN(2)')
console.log(isNaN('aa' - 12), "isNaN('aa'-12)")

