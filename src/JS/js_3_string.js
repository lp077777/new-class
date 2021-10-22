//data type string
var str1 = "abc"
var str2 = 'abc'
// var str3 = abc will throw an error

var str4 = "a'b'c"
console.log(str4, 'str4')
var str5 = 'a"b"c'
console.log(str5, 'str5')

//escapese https://www.w3school.com.cn/js/js_strings.asp
var str6 = "a\"b\"c"
console.log(str6, 'str6')
console.log('adsfasdfads\nasdfadsfasfasdfasdf"aaaaaaa"')

//using length prop to get the string length
var strLength = '123123123123123'
console.log(strLength.length,'length')

//combine strings , different data type combine with string, the result is string
console.log('aaaaaaa' + 'bbbbbbbb')
console.log('aaaaaaa' + 'bbbbbbbb' + 3)
console.log(12 + 12)
console.log('12' + 12)
//enhance
var num = 18
console.log('my age ' + num + ' years old')
//console.log(`my age ${num} years old`)

// var result = prompt('please enter')
// console.log('result is ' + result)


//Boolean only true and false 
var flag = true //type of flage is boolean
var flag1 = false
console.log(flag + 1)
console.log(flag1 + 1)

//undefined
var flag3 
console.log(flag3) // undefined
console.log(flag3 + 'result') //undefinedresult
console.log(flag3 + 1) //NaN

var flag4 = null
console.log(flag4) 
console.log(flag4 + 1) //1
console.log(flag4+'result')