//two ways to create array
var arr = [1, 2, 3]
var arr1 = new Array() //create an empty array
//var arr1 = new Array(2) // length is 2, 2 empty elements
var arr2 = new Array(2, 3)

// check if it's an array
//instanceof
var obj = {}
console.log(arr instanceof Array)
console.log(obj instanceof Array)

// Array.isArray()
console.log(Array.isArray(arr))
console.log(Array.isArray(obj))

// add  delete elements in an array
//push() add one or more elements to the end of array
arr.push(4)
console.log(arr)
arr.push(4, 5)
console.log(arr)
//push also have a return value ,the value is new array.length, and the old arr also changed
console.log(arr.push(55))
//unshift() add the start of array
arr.unshift('start')
console.log(arr)
console.log(arr.unshift(55)) // same with push

//pop() delete the last element of array, but can only delete one , the return value is deleted element
console.log(arr.pop())
console.log(arr)
//also shift is delete the first one 
console.log(arr.shift())
console.log(arr)

//reverse() 翻转
//sort() but sort can only work between 0-9
var arr3 = [11, 13, 77, 2]
arr3.sort(function (a, b) { 
  return a - b // 升序
  //return b-a  降序
})

// get index  indexOf(), if have same elements, return the first one , if cannot find ,return -1
console.log(arr3.indexOf(11))
//lastIndexOf() return the index, but find from end