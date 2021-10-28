// check the type
// var num = 10
// console.log(typeof (num),num)
// var str = 'str'
// console.log(typeof (str),str)
// var flag = true
// console.log(typeof (flag),flag)
// var unde = undefined
// console.log(typeof (unde),unde)
// var nullValue = null
// console.log(typeof (nullValue), nullValue)
// var arr = []
// console.log(typeof (arr), arr)
// var obj = {}
// console.log(typeof (obj),obj)
//type transfer
//why we need transfer, we get the value from form & prompt is string type , cannot directly calculate, need transfer
//3 ways,  transfer to string, transfer to number , transfert to boolean

// transfer to string
// var num1 = 1
// var transferType = num1.toString()
// console.log(num1.toString())
// console.log(typeof(transferType),'type')
// var num2 = 2
// console.log(String(num2))
// console.log(typeof(String(num2)),'type')
// var num3 = 3
// //implicit conversion 隐式转换
// console.log(num3 + 'this is a string')

//transfer to Number 
var age = '18'
console.log(typeof (age), 'agetype')
//parseInt can transfer the string to integer
// console.log(parseInt(age))
// console.log(parseInt('3.1415')) 
// console.log(parseInt('3.9415')) // only get the integer part
// console.log(parseInt('1230px')) // will remove the last characters

//2. parseFloat can get float numbers
// console.log(parseFloat('3.1415')) 
// console.log(parseFloat('3.9415')) 
// console.log(parseFloat('1230.111px'))

// //Number
// var str1 = '123'
// console.log(Number(str1))

// //using - *  /
// console.log('12' - 1)
// console.log('12' - '11')
// console.log('12' * 1)
// console.log('12' + 1)

//how to get the user's age ?  using prompt 
// var age = prompt("please enter yoru age")
// console.log(Number(age) + 1)
//transfer to boolean Boolean()
// console.log(Boolean(''))
// console.log(Boolean(NaN))
// console.log(Boolean(null))
// console.log(Boolean(undefined))

//simple data type & complex data type

//simple data type : value type, when we store in variable, it stores value itself
//string , number , null, booleanm, undefined
//complex data type : array, obj
//stack 栈 for simple data type    heap堆 for complex data type

// complex data type, var name point to stack, that is address, this address point to the data in heap
//simple data type pass data to function, it's just copy the same value and pass, all the changes in function, won't change the variable outside
//comloex data type pass to function, just pass the same address in stack, still point to the same target in heap