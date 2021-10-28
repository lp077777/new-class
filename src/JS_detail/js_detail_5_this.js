//this point , normally , this point to the obj we called this
// in global scope, this point to global obj window
console.log(this)

function fn() { 
  console.log(this)
}

fn() // point to window, same as window.fn()

// setTimeout(function () {
//   console.log(this)
// }, 2000)  // still point to windwo  same as window.setTimeout
 
var o = {
  sayHi: function () { 
    console.log(this) // this point to o
  }
}
o.sayHi() 
// who calling this function, this point to who 

//3 in constructor 
function Fun() { 
  console.log(this) //this point to fun, the instance obj
}
var fun = new Fun()


//why we use this, using this to replace the complex obj name 
// default bind
//implicit binding
var girl = {
  name: 'abc',
  height: 160,
  weight: 100,
  detail: function () { 
    console.log(this.name)
    console.log(this.weight)
    console.log(this.height)
  }
}
girl.detail() 

//hard binding
var girlName = {
  name: 'abc',
  sayName: function () { 
    console.log(this.name)
  }
}
var girl1 = {
  name:'def'
}
var girl2 = {
  name:'ghi'
}
girlName.sayName.call(girl1)
girlName.sayName.call(girl2)
girlName.sayName.apply(girl1)
girlName.sayName.apply(girl2)

function Person(name) { 
  this.name = name
  this.sayName = function () { 
    console.log(this.name)
  }
}
var name = 'kkk'
var newPerson = new Person('aaa')
newPerson.sayName()

//test 
function a() { 
  function b() { 
    console.log(this) //no call default point to window
    function c() { 
      console.log(this)
    }
    c()
  }
  b()
}
a()

function specail() { 
  console.log(this.name)
}
function e() { 
  console.log(this.name)
}
var boy = {
  name: 'ddd',
  detail: function () { 
    console.log(this.name)
  },
  women: {
    name: "eee",
    detail: function () { 
      console.log(this.name)
    }
  },
  specail: specail,
  bibi: function () { 
    return function () { 
      console.log(this.name)
    }
  }
}
function d(func) { 
  return func()
}
boy.detail()
boy.women.detail()
boy.specail()
specail()
var f = boy.bibi()
var c = boy.detail
c() // calling c in winodw
boy.e = e
boy.e()
d(boy.detail)
console.log(f)
f()