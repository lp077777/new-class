// what is obj, obj is a  real object, in js , obj is a set of unordered props and functions, like strings, value, array, function
// obj consist with props and function in obj, is clear and more powerful

// 3 ways to create a obj 1, {} , 2 . new Object 3. use constructor
var obj = {
  name: 'name',
  age: 18,
  gender: 'man',
  sayHi: function () { 
    console.log('Hi')
  }
}
// in obj, we use key value  to store
// between props or functions , we use ,

// how to use obj 's props ?  obj.name
console.log(obj.name)
console.log(obj['age'])
//how to call obj's function
obj.sayHi()
//variable and props both using for store data, varialbe is declared and used unique, props in obj no need declare, using obj.prop
//using function , fn() , obj's function obj.fn()

//2 new Object
var obj1 = new Object()
obj1.name = 'aaaa'
obj1.age = 20
obj1.sayHi = function () {  console.log('Hi')} // we use = to assign value

// 3 contructor
// why we need contructor , the other 2 ways only can create one obj once
// we can use function to repeat the same code ,but this function is different, inside is obj

// we need Person obj, same props : name , age, gender, function: skill

function Person(name,age,gender,skill) { 
  this.name = name
  this.age = age
  this.gender = gender
  this.skill = function () { 
    console.log(skill)
  }
  this.personSkill = function (personskill) {
    console.log(personskill)
   }
}

var person1 = new Person('aaa', 11, 'man')
console.log(typeof person1)
console.log(person1['gender'])
//constructor no need return 
//when we use constructor, we must use new
// when we new Obj(). we call the constructor

// obj is a real thing , constructor same as class
// we use constructor to create a obj is instance

// nwe constructor can create an empty obj in RAM,
// this will point to this empty obj
// running constructor code , add props and functions in this empty obj
// return this obj

// how to traverse the obj
// for in

for (var k in person1) { 
  console.log(k)
  console.log(person1[k])
}

//built-in objects, already defined in js, can used directly by developer , help us to fast develop
//object : customize obj, built-in obj, browser obj
// Math, Date, Array, String