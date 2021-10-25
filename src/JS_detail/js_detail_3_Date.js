//Date Date is a constructor, must use new to create
var date = new Date() // without parameters , will return the current time
console.log(date)
//with parameter
console.log(new Date(2021, 10, 10)) // why return Nov ?
console.log(new Date('2021-10-10')) 
console.log(date.getFullYear())
console.log(date.getMonth()) // the month must +1 (becuase 0-11)
console.log(date.getDate())
console.log(date.getDay()) // Sunday is 0 

var year = date.getFullYear()
var month = date.getMonth() + 1 
var day = date.getDate()
var today = date.getDay() // create an array [Sunday, Monday, Tuesday, Wed, Thur, Fri, Sat]
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())

// how to return a format 00:00::00
function getCurrentTime() { 
  //
}

//the totall ms Date started from 1970/01/01
console.log(date.valueOf())
console.log(date.getTime())
var date1 = +new Date()
console.log(date1)
console.log(Date.now()) // timeStamp

//countdown
function countDown(time) {
  var nwoTime = +new Date()
  var inputTime = +new Date(time)
  var times = (inputTime - nwoTime)/1000
  var d = parseInt(times / 60 / 60 / 24)
  d = d < 10 ? '0' + d : d
  var h = parseInt(times / 60 / 60 % 24)
  var m = parseInt(times / 60 % 60)
  var s = parseInt(times % 60)
  return `${d}days:${h}hours:${m}mins:${s}s`
}

console.log(countDown('2021-12-12 18:00:00'))