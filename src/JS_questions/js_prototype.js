function Animal() { 
  this.color = ['red', 'white']
}

Animal.prototype.getColor = function () { 
  return this.color
}

function Dog() { }
Dog.prototype = new Animal()
let dog1 = new Dog()
dog1.color.push('black')
let dog2 = new Dog()
console.log(dog2.color)


//about call
// function person() { 
//   console.log(this.name)
// }

var egg = {
  name:'egg'
}

// person.call(egg)

function SuperMarket() { }
SuperMarket.prototype.product = 'mask'
function Shop() { }
// person.__proto__ === SuperMarket.prototype
Shop.prototype = new SuperMarket()
var person = new Shop()
// person.__proto__ === Shop.prototype
console.log(person.product)

var F = function () { }
Object.prototype.a = function () { }
var f = new F()
console.log(f)