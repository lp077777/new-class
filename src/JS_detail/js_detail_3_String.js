//basic packaging type
//obj has props and function , why str can also have ?
var str = 'study'
console.log(str.length)
// package the simple data type to complex data type

// var tmp = new String('study')
// str = tmp
// tmp = null 

//because the string cannot be changed, it's apply a new space in RAM ,and the varialbe point to the new space
//all changes will not change the string, just apply a new space
// string can also use indexOf() and lastIndexOf() , also can define the range 
console.log(str.indexOf('d', 2))

var str1 = 'adsfasdfklkooooajsdflajfdooo' // how to find all o and index 
var index = str1.indexOf('o')
while (index!==-1) { 
  console.log('o', index)
  index = str1.indexOf('o', index + 1)
}

//base on index  return the value
//charAt(index)
console.log(str1.charAt(2))
//charCodeAt(index) to check with button user pressed
// str[index]
console.log(str1[2]) // only working in H5

//count the most repeated char
var o = {}
for (var i = 0; i < str1.length; i++) { 
  var chars = str1.charAt(i)
  if (o[chars]) {
    o[chars] ++
  } else { 
    o[chars] = 1
  }
}
console.log(o)
// obj loop
var max = 0
var ch = ''
for (var k in o) { 
  if (o[k] > max) { 
    max = o[k]
    ch = k
  }
}
console.log(max, ch)

//concat()
console.log(str.concat('this is str1'))
//substr(start,how many chars)
console.log(str.substr(2, 2))
//replace
console.log(str.replace('s', 'k')) // jsut replace first one
while (str1.indexOf('o') !== -1) { 
  str1 = str1.replace('o','*')
}
console.log(str1)

//split()
var str2 = 'a,b,c,d'
console.log(str2.split(','))