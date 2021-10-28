// 作用域： 全局作用域，函数作用域，块状作用域
// console.log('scope')
// console.log(123)
//when will be global scope, global variable can be access anywhere
//window.abc
//abc
// var abc = 1234
// abcd = 12345
//delete window.abcd
// looks same but different, first one is global variable, the second is not , second can be deleted, is the window obj's prop
// delete abc & delete abcd , same way  delete window.abcd

// function test() {
// 	// ab = 45
// }
// // ab is not global variable,even can be accessed in another js file, it's window obj's prop, global variable must use define
// test()

//函数作用域 inside function

// function test1() {
// 	// var 变量提升 variable promotion
// 	//var b
// 	var a = 3
// 	if (a === 3) {
// 		var b = 4 // var cannot blocked b , it still can access outside the block.
// 		// use let b = 4 that's the block scope, then b cannot be access outside if
// 		console.log('aaaaaa') //block scope
// 	} else {
// 		console.log('bbbbbb')
// 	}
// 	console.log(b)
// 	return a + 4
// }
// console.log(test1())
//console.log(a) is not defined, cannot access a

// function test2() {
// 	var a = 3
// 	// cannot get b
// 	function test3() {
// 		var b = 4
// 		// can get a
// 		return a + b
// 	}
// 	return test3
// }

//dynamic scope
window.a = 3

function test4() {
	console.log(this.a)
}
test4()
test4.bind({
	a: 100,
})()
