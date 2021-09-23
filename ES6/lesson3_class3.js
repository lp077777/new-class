// static function

// how to add a static function in ES5, which means only in this instance, not the prototype
let Animal = function (type) {
	this.type = type
}
//disadvantage, 复用，而不是每个子类都挂载重复的属性和功能

Animal.prototype.eat = function () {
	Animal.walk()
	//this.walk() also not working , this means dog
	console.log('eating now')
}
Animal.walk = function () {
	console.log('walk')
}

let dog = new Animal('dog')
console.log(dog)
console.log(typeof dog)
dog.eat()
// dog.walk()

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

let dog1 = new Animal1('dog')
dog1.eat()
//dog1.walk()

//in real work , when to use instance function , when to use static, like this function will use the instance's data, then you need to do the instance function
//if never use the instance obj's data , then use static , these two functions are not better or worse, just depend on your case and requirements
