//ES5 How to delare a class
let Animal = function (type) {
  this.type = type
}
//disadvantage, 复用，而不是每个子类都挂载重复的属性和功能

Animal.prototype.eat = function () {
  console.log('eating now')
}
let dog = new Animal('dog')
let monkey = new Animal('monkey')

console.log(dog)
console.log(monkey)
//both have eat function ,that should not happen
// monkey.eat = function () {
//   console.log('error')
// }

// monkey.constructor.prototype.eat = function () {
//   console.log('error')
// }
monkey.__proto__.eat = function () {
  console.log('error')
}
//console.log(monkey.__proto__ === monkey.constructor.prototype)
//console.log(monkey.constructor === Animal)
dog.eat()
monkey.eat()
//the new obj will be large , if you have a lot of functions and props

