// create a new array
//ES5

//let array = Array(5)
//let array = ['', '']

//ES6 Array.prototype.of
let array = Array.of(1, 2, 3, 4, 5)
console.log(array)

//ES6 Array.prototype.fill
let array1 = Array(5).fill(1, 2)
//Array.fill(value,start,end)
console.log(array1)
let array2 = [1, 6, 3, 4, 6]
console.log(array2.fill(8, 2, 4)) //不包括end


//find 

//ES5
let result = array2.filter(item => item % 2 === 0)
console.log(result)
//ES6 Array.prototype.find
console.log(array2.find(item => item === 6))
console.log(array2.find(item => item % 2 === 0))
//find the first one , then return and will not continue
console.log(array2.findIndex(item => item % 2 === 0))
//findIndex also just return the first result's index