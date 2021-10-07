//the default Parameters ES5 with ES6
//ES6 add the default value in the input
function fn(x, y = 7, z = 77) {
	console.log(arguments)
	console.log(Array.from(arguments))
	// if (y === undefined) {
	// 	y = 7
	// }
	// if (z === undefined) {
	// 	z = 77
	// }
	return x + y + z
}
console.log(fn(5, 8, 9))
//if don't want to input y, just input z how to do that , cannot use console.log(fn(5, "", 9)) , so console.log(fn(5, undefined, 9))
// the default value can also be the declare like fn(x, y=7, z=x+y)
//arguments

//Rest Parameter, how to handle the unknown paramter
function sum() {
	let num = 0
	//ES5
	// Array.prototype.forEach.call(arguments, function (item) {
	//   num += item*1
	// })

	//ES6
	Array.from(arguments).forEach(function (item) {
		num += item * 1
	})
	return num
}

console.log(sum(1, 2, 3, 4, 5))

// function sum1(...nums) {
//   //REST Parameters
//   let num = 0
//   nums.forEach((item) => num += item * 1)
//   return num
// }

function sum1(base, ...nums) {
	//REST Parameters
	let num = 0
	nums.forEach((item) => (num += item * 1))
	return base * 2 + num
}
console.log(sum1(2, 2, 2, 2, 2))

//rest 1: get all parameters 2: is an array, can use array functions 3: can be seperate

function sum2(x = 1, y = 2, z = 3) {
	return x + y + z
}
//input data [4,5,6]
let data = [4, 5, 6, 7]
sum2(data[0], data[1], data[2])

console.log(sum2.apply(this, data))
//ES6 spread operater
console.log(sum2(...data))

//arrow function
let hello = (name) => {
	console.log('hello world ' + name)
}
hello('test')

//only have one param, it can be like this
//let hello = name => { console.log('hello world '+name) }
// can ignore curly braces ?
let sum3 = (x, y, z) => x + y + z
let sum4 = (x, y, z) => ({ x: x, y: undefined, z: z })
// let sum4 = (x, y, z) => {return { x: x, y: undefined, z: z }}

//this function

let test = {
	name: 'test',
	say: function () {
		console.log(this.name)
	},
}
test.say()

//箭头函数体内的this对象，就是定义该函数时所在的作用域指向的对象，而不是使用时所在的作用域指向的对象
var a = 'aaa'
let test1 = {
	a: 'test',
	say: () => {
		console.log(this.a)
	},
}
test1.say()

let aa = 'aaa'
let test2 = {
	aa: 'test',
	say: function () {
		let s = () => console.log(this.aa)
		return s
	},
}
let output = test2.say()
output()
