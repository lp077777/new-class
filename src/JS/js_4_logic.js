//logic operator  && || !

console.log(3 > 5 && 3 > 2) //one result false , result false  , both should be true, result will be true
console.log(3 < 5 && 3 > 2)

console.log(3 > 5 || 3 > 2)
console.log(3 < 5 || 3 > 2)
console.log(3 < 5 || 3 < 2)  // only both false , result is false

console.log(!true)
console.log(!(7 < 10))
console.log(!(7 < 10 || 10 > 11))

//short circuit calculation && if expression one is true , then return express 2 , if express1 is false , return express 1
console.log(123 && 456)
console.log(0 && 456)
console.log(1 && 456 && 1 + 1 && 2 + 2)
console.log(1 && 456 && 0 && 2 + 2)



//|| if expression one is true , then return express 1 , if express1 is false , return express 2
console.log(123 || 456)
console.log(0 || 456)
console.log(0 || 0 || 456)
console.log(0 || 0 ||0)
console.log(1 || 456 || 1 + 1 || 2 + 2)

//test
// var num = 0
// console.log(123 || num++)
// console.log(num)

//assignment
// var num1 = 10
// num1 += 2
// console.log(num1)

// var num2 = 10
// num2 =+ 2
// console.log(num2)

//priority
//1 parentheses ()
//2 unary operator ++ -- !
//3 calculation */% + -
//4 > >= < <=
//5 == != === !==
//6 && ||
//7 assignment =
//8 ,

//test
// console.log(4 >= 6 || 'human' != 'cat' && !(12*2==144) && true)