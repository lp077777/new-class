// how to do inherit
let Animal = function (type) {
	this.type = type
}

Animal.prototype.eat = function () {
	Animal.walk()
	console.log('eating now')
}
Animal.walk = function () {
	console.log('walk')
}
//ES5 inherit
let Dog = function () {
	//rest the father class's contructor function
	Animal.call(this, 'dog')
	this.run = function () {
		console.log('run')
	}
}
//some function not in the contructor function, may in the protoype chain
Dog.prototype = Animal.prototype //point to the same address, not copy a new one, obj only point to same address

let dog = new Dog('dog')
dog.eat()

class Animal1 {
	constructor(type) {
		this.type = type
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
	constructor() {
		super('dog')
		this.age = 2
	}
}
let dog1 = new Dog1('dog')
dog1.eat()
