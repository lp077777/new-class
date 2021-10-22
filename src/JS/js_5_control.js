// control 3 differnt
//1 order 2 branch 3 loop
// basic is order  a => b => c
//branch , different condition different result  : if / switch
//if (condition) { code }
// if (3 > 5) { 
//   alert('error')
// }

//check the age> 18 , if can play games

//multiple conditions
// if (3 > 5) {
//   console.log(1)
// } else { 
//   console.log(2)
// }

//test how to check the leap year
// var year = prompt("enter year")
// if (year % 4 === 0 || year % 400 === 0) {
//   alert('yes')
// } else { 
//   alert('no')
// }

//more conditions
// var score = prompt('enter your score')
// if (score >= 90) {
//   alert('A')
// } else if (score < 90 && score >= 70) {
//   alert('B')
// } else if (score >= 60 && score < 70) {
//   alert('C')
// } else { 
//   alert('FAIL')
// }

//ternary expression
//console.log(1 > 2 ? 'a' : "b")

// same 
// if (1 > 2) {
//   return 'a'
// } else { 
//   return 'b'
// }
// var time = prompt('enter the second')
// if (time < 10) {
//   console.log(0+time)
// } else { 
//   console.log(time)
// }
// var result = time > 10 ? '0' + time : time
// alert(result)


//switch
// var score = prompt('enter your score')
// switch (score) { 
//   case score >= 90:
//     console.log('A')
//     break
//   case score < 90 && score >= 70 :
//     console.log('B')
//     break
//   default:  console.log('fail')
// }

// switch (1) { 
//   case 3:
//     console.log(3)
//   case 2:
//     console.log(2)
//   case 1:
//     console.log(1)
//   default:
//     console.log('default')
// }

// switch (3) { 
//   case 3:
//     console.log(3)
//   case 2:
//     console.log(2)
//   case 1:
//     console.log(1)
//   default:
//     console.log('default')
// }

//difference between switch and if else, normally it can replace each others, if else is flexible, for scope condtion, like score, 
//switch used for more cases and for fixed condtion, like name , key