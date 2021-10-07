// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   eat() {
//     console.log('eat food')
//   }
// }

// let dog = new Animal('dog')
// let monkey = new Animal('monkey')
// console.log(dog)
// console.log(monkey)
// dog.eat()
// monkey.eat()
// console.log(typeof (Animal)) //function
// console.log(monkey.constructor.prototype === monkey.__proto__)

//const readonly

//dog.type = "error"   how to protect the props , how to add readonly props
// getter setter
//if let _age = 4   then in get just return _age, so if you want to get age and you change the age , it will never work
let _age = 4
class Animal {
	constructor(type) {
		this.type = type
	}
	get age() {
		return _age
	}
	set age(value) {
		if (value > 4 && value < 7) {
			_age = value
		}
	}
	eat() {
		console.log('eat food')
	}
}
let dog = new Animal('dog')
console.log(dog.age)
dog.age = 5
console.log(dog.age)
//console.log(dog._age) cannot get the value //undefined  althoug setter and getter is function, but when we use it , use the prop
