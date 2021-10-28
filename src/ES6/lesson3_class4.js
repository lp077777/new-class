// how to do inherit
// let Animal = function (type) {
// 	this.type = type
// }

// Animal.prototype.eat = function () {
// 	Animal.walk()
// 	console.log('eating now')
// }
// Animal.walk = function () {
// 	console.log('walk')
// }
// //ES5 inherit
// let Dog = function (type) {
// 	//rest the father class's contructor function
// 	Animal.call(this, 'dog')
// 	this.run = function () {
// 		console.log('run')
// 	}
// }
// //some function not in the contructor function, may in the protoype chain
// Dog.prototype = Animal.prototype //point to the same address, not copy a new one, obj only point to same address

// let dog = new Dog('cat')
// console.log(dog.type)
// dog.eat()
class Animal1 {
	constructor(type,dead) {
		this.type = type
		this.dead = dead
	}
	eat() {
		Animal1.walk()
		console.log('eat food')
	}
	static walk() {
		console.log('walk')
	}
}

class Dog1 extends Animal1 {
	constructor(age,type,dead) {
		super(type,dead)
		this.age = age
	}
}
let dog1 = new Animal1(1,2,3)
let dog2 = new Dog1(1, 2, 3)
console.log(dog1)
console.log(dog2)
dog1.eat()
