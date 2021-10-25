//Math
//Math is not a constructor, we can just use it
//Pi
console.log(Math.PI) // PI
console.log(Math.max(1, 99, 111, 22)) //must be number , or will return NaN
console.log(Math.max('123', 11, 55, 'pink'))

//do a my math obj
var myMath = {
  PI: 3.1415926,
  max: function () { 
    var max = arguments[0]
    for (var i = 1; i < arguments.length; i++) { 
      if (arguments[i] > max) { 
        max = arguments[i]
      }
    }
    return max
  },
  min: function () { 
    var min = arguments[0]
    for (var i = 1; i < arguments.length; i++) { 
      if (arguments[i] < min) { 
        min = arguments[i]
      }
    }
    return min
  }
}

// abs 
console.log(Math.abs(-1))
console.log(Math.abs(1))

//取整
console.log(Math.floor(1.1)) //向下取整
console.log(Math.floor(1.9)) //向下取整
//ceil
console.log(Math.ceil(1.1)) //向上取整
console.log(Math.ceil(1.9)) //向上取整
//round
console.log(Math.round(1.1)) //四舍五入
console.log(Math.round(1.9)) 
console.log(Math.round(-1.5)) //.5 is special, get the up one  -1.5 get -1 , only 5 is special

//随机数random
//random 返回一个随机小数 [0,1) ,  random >=0 , random <1
console.log(Math.random())
//随机整数
function getRandom(min, max) { 
  return Math.floor(Math.random()*(max-min+1)) + min
}
console.log(getRandom(1, 5))
//随机点名
var arr = ['a', 'b', 'c', 'd']
console.log(arr[getRandom(0, arr.length - 1)])
