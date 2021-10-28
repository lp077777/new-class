//ES5中伪数组如何转换成数组，伪数组：有特性，不可调用array的方法
//let args = [].slice.call(arguments) //ES6 not use arguments anymore
//let imgs = [].slice.call(document.querySelectorAll('img')) //NodeList

//ES6 Array.prototype.from

//let args = Array.from(arguments)
//let imgs = Array.from(doc.querySelectorAll('img'))
//imgs.forEach
//Array.from(fakeArray,manFn,thisArg)

//let array = Array(5)
// array.forEach(item => item = 1) empty array cannot forEach
//Array(5)只是声明了一块空间来存放一个5个元素的数组，但地址具体是什么还没有分配，
//每个元素只有在赋值的时候才会指定具体的key存放地址，所以forEach的时候key为空，就无法赋值。
//就如下，我先赋值一个元素，那么赋值的那个元素是会变成1的，其余未赋值的元素仍然是Empty
// array[0] = 2
// array.forEach((val, id, arr) => {
//   console.log('before:', val, id, array)
//   arr[id] = 1
//   console.log('after:', val, id)
// })
// console.log(array)
// for (let i = 0; i < array.length; i++) {
//   array[i] = 1
// }

let array = Array.from(
	{
		length: 5,
	},
	() => 3
)
console.log(array)
//{0:'a',1:'b',length:2 }
