//typeOf can identify undefined,boolean, Number, String, Symbol, Function
//all the others will be object, like array, null, date
function type(obj) { 
  let res = Object.prototype.toString.call(obj).split(' ')[1]
  res = res.substr(0,res.length-1)
  return res
}
console.log(type([1, 2, 3]))
console.log(type({ a: 123, bb: 123 }))
console.log(type(new Map()))
console.log(type(new Set()))
console.log(type(function a() { }))

//typeof instanceof
//Symbol is function
console.log([1,2] instanceof Array)
// typeof check the data type, instanceof check the obj's relationship
//typeof return string, instanceof boolean
//typeof used for simple data type , function or obj
// instanceof , left must be the instance, right is the function
console.log([1, 2] instanceof Object)

//0.1+0.2 = 0.3000000004.toFixed(5)
parseFloat((0.1+0.2).toFixed(5))