//Variable


//variable : store data, it's a box for data, for concept, it will apply a space in RAM to store the data
//1 declare a variable, and assignment

// var age
// age = 12
var age = 12
// console.log(age,'age')
var name = "junyi"
// var gender = "man"
// var password = 12345
// console.log(name,'name')
// console.log(gender,'gender')
// console.log(password,'password')

// var inputData = prompt("please enter your name")
// console.log(inputData, "inputData")

//overwrite: the overwritted varialbe is the last one 
// name = "kk"
// age = 20
// console.log(age, 'age')
// console.log(name,'name')
// var address
// console.log(address,'address')
// console.log(phone)

// //will work , but don't use
// dob = '11/11'
// console.log(dob)

//variable naming convention: uppercase lowercase is different
var app = 10
var App = 100

// //only aollow 2 special char _ $
var $name
var name_junyi

console.log(app,'app')
console.log(App,'App')

// //var 18age cannot start with number  but age18 can work
var age18 = false
console.log(age18, 'age18')
// //var var , the key word cannot be used in naming
// //name must mean something 
// //camel case myFisrtName


// //test: change two varialbe's value
var apple1 = 'red'
var apple2 = 'green'

console.log(apple1, "apple1")
console.log(apple2, 'apple2')

//need a middle variable
var middleVariable 
middleVariable = apple1
apple1 = apple2
apple2 = middleVariable
console.log(apple1, "apple1")
console.log(apple2, 'apple2')