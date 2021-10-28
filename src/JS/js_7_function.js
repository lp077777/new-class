// what is function, reduce the repeat code,  encapsulate a block of code that can be executed repeatedly
// get sum
function getSum(num1, num2) { 
  var sum = 0
  for (var i = num1; i <= num2; i++) { 
    sum += i
  }
  console.log(sum)
} // declare function
getSum(1, 10) //call this function
getSum(0, 2)

// function name lowercase , if the function not be called, the function will not call itself
//formal parameters:in declare function parentheses , arguments: in call function parenthese 
//formal para accept the arguments
//if formal para less then really argu

//if argu less then formal, it will be undefined
// function getSum1(num1, num2) {
//   console.log(num2)
//   console.log(num1+num2)
// }
// getSum1(0, 2, 10, 11, 12)
// getSum1(1)

//return value, sometimes we hope function return the result to who called this function, using return

// function getSum2() { 
//   return 'called' // when function run to return, return the result to the caller , () = return result
// }
// console.log(getSum2())

// function getMax(num1, num2) {
//   return num1 > num2 ? num1:num2
// }
// console.log(getMax(11, 3))

var array4 = [11, 22, 33, 44, 55]
var max = array4[0] 
for (var i = 0; i < array4.length; i++) { 
  if (array4[i] > max) { 
    max = array4[i]
  }
}
console.log(max)
function getMaxArray(array) {
  var max = array[0] 
  for (var i = 0; i < array.length; i++) { 
    if (array[i] > max) { 
      max = array[i]
    }
  }
  return max
 // return array
  // alert('123')
  // return max, array
}
var result = getMaxArray([11, 22, 77, 44, 55])
console.log(result)
 // return will also end the function and return will only return one value
 //if function have a return , if no return , it will return undefined

//differ between break, continue, return , break and continue used in loop, 
//break： stop this loop,  continue: stop this round, jump to next,
//return: not only jump out the loop, can also return value, also can end a function

//arguments only in ES5
// when we not sure how many props passed in this function, we can use arguments 
// in JS , arguments actually is the current function's obj, alll functions already have this obj to store the whole arguments

function fn() {
  console.log(arguments)
  // we can use for loop to get the all argu
  for (var i = 0; i < arguments.length; i++) { 
    console.log(arguments[i]) // only functions have arguments
  }
}
fn(1, 2, 3) //arguments is a pseudo array
// what is pseudo array 
//1, have the length prop
//2, data stored based on index
//3, don't have some real functions for array, like pop(),push()

//question how to get the max value for random numbers getMax(1,3,5) getMax(1,5,7,8,22)
//how to do reverse , how to do bubble sort
// function sort(arr) { 
//   for (let i = 0; i < arr.length; i++) { 
//     for (let j = 0; j < arr.length - i; j++) { 
//       if (arr[j] > arr[j + 1]) { 
//         let tmp
//         tmp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j+1] = tmp
//       }
//     }
//   }
//   return arr
// }
// console.log(sort([5,4,3,1,7,6]))

// in one functin we can call another function
// function fn1() { 
//   console.log('fn1')
//   fn2()
// }
// function fn2() { 
//   console.log('fn2')
//   // fn1()
// }
// fn1()
// fn2()

// two ways to function declaration VS function expression
// function fn () {}
// var fn3 = function () { console.log('fn')}
// console.log(fn3)
