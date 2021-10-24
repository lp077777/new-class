// what is array
//An array is a collection of data, each one is an element , can put a lot of data in one variable
var array1 = new Array
var array2 = [1, 2, 3, '123', {}, true] //normally using this
//using index to get element, index from 0
console.log(array2[3])
console.log(array2[6])

//how to get the all elements ?  what is traverse
for (let i = 0; i < array2.length; i++) { 
  console.log(array2[i])
}
// length is not index, length is dynamic
// how to get array 's sum and average ?
// var array3 = [11, 22, 33, 44, 55]
// var sum = 0 
// var average = 0
// for (var i = 0; i < array3.length; i++) { 
//   sum += array3[i]
// }
// average = sum / array3.length
// console.log(sum,average)

// how to get eh max value in an array ? 
// var array4 = [11, 22, 33, 44, 55]
// var max = array4[0] 
// for (var i = 0; i < array4.length; i++) { 
//   if (array4[i] > max) { 
//     max = array4[i]
//   }
// }
// console.log(max)

//how to transfer an array to a string
// var array5 = [11, 22, 33, 44, 55]
// var str = ''
// for (var i = 0; i < array5.length; i++) { 
//   str = str + ' | ' + array5[i]
// }
// console.log(str)

// how to add new element to an array : just change the length 
// array2.length = 15
// console.log(array2)
// array2[6] = 'the 6 one'
// console.log(array2)

// what if array2="123" ? 
// how to create an array with 1-100
// how to filter an array ?
//how to delete the repeated element ?
// how to reverse the array

//bubble sort :make the data sorted from lowest to highest /high to low

// how many loops do we need ? every loop, how mange exchanges do we need ?
var array = [1, 2, 5, 6, 8, 10, 12]
for (var i = 0; i < array.length; i++) { 
  for (var j = 0; j < array.length - i; j++) { 
    if (array[j] < array[j + 1]) { 
      var tmp = array[j]
      array[j] = array[j + 1]
      array[j + 1] = tmp
    }
  }
}
console.log(array)