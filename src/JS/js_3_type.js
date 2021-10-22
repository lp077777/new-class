// check the type
var num = 10
console.log(typeof (num),num)
var str = 'str'
console.log(typeof (str),str)
var flag = true
console.log(typeof (flag),flag)
var unde = undefined
console.log(typeof (unde),unde)

//type transfer
//why we need transfer, we get the value from form & prompt is string type , cannot directly calculate, need transfer
//3 ways,  transfer to string, transfer to number , transfert to boolean

// transfer to string
var num1 = 1
var transferType = num1.toString()
console.log(num1.toString())
console.log(typeof(transferType),'type')
var num2 = 2
console.log(String(num2))
var num3 = 3
//implicit conversion 隐式转换
console.log(num3 + 'this is a string')

//transfer to Number 
var age = '18'
console.log(typeof (age), 'agetype')
//parseInt can transfer the string to integer
console.log(parseInt(age))
console.log(parseInt('3.1415')) 
console.log(parseInt('3.9415')) // only get the integer part
console.log(parseInt('1230px')) // will remove the last characters

//2. parseFloat can get float numbers
console.log(parseFloat('3.1415')) 
console.log(parseFloat('3.9415')) 
console.log(parseFloat('1230.111px'))

//Number
var str1 = '123'
console.log(Number(str1))

//using - *  /
console.log('12' - 1)
console.log('12' - '11')
console.log('12' * 1)
console.log('12' + 1)

//how to get the user's age ?  using prompt 

//transfer to boolean Boolean()
// console.log(Boolean(''))
// console.log(Boolean(0))
// console.log(Boolean(NaN))
// console.log(Boolean(null))
// console.log(Boolean(undefined))