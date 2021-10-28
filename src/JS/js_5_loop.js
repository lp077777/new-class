//loop, can repeat some part of code

//1. for loop. repeat code , normally about count
//there is no assignment , so ++i and i++ may not be different
// for (var i = 0; i < 5; i++) { 
//   console.log(i)
// }
//initial variable, condition, operator
//initial declare a variable, as a counter
// condition check if keep loop, also the end condition
// operator, end of every loop, update the counter

//break point debugger
// in browser source

//let user control
// var n = prompt('enter numbers')
// for (var i = 0; i < n; i++) { 
//   console.log(i)
// }

// how to calculate 1-100 sum
// var sum = 0
// for (var i = 1; i <= 100 ; i++) { 
//   sum = sum + i
// }
// console.log(sum)

//get 1-100 average, how ?
// var sum = 0
// for (var i = 1; i <= 100 ; i++) { 
//   sum = sum + i
//   if (i === 100) { 
//     sum = sum/i
//   }
// }
// console.log(sum)

// how to calculate the average score in a class

// var classNum = prompt('student numbers')
// var allScore = 0
// for (var i = 1; i <= classNum; i++) { 
//   allScore = allScore + Number(prompt(` the ${i} student's score`)) //what's wrong here
// }
// console.log(allScore/classNum)

//star issue 
// var stars = ''
// for (var i = 1; i <= 5; i++) { 
//   stars=stars+'*'
// }
// console.log(stars)
// var stars = ''
// for (var i = 1; i <= 5; i++) { 
//   for (var j = 1; j <= i; j++) { 
//     stars=stars+'*'
//   }
//   console.log(stars)
//   stars = ''
// }
// var stars = ''
// for (var i = 1; i <= 5; i++) { 
//   for (var j = 5; j >= i; j--) { 
//     stars=stars+'*'
//   }
//   console.log(stars)
//   stars = ''
// }

// var result = ''
// for ( var i = 1; i <= 9; i++) { 
//   for (var j = 1; j <= i; j++) {
//     result = result + ` ${j} x ${i} = ${i*j}`
//   }
//   result = result + '\n'
// }
// console.log(result)

//while
// var num5 =5
// while (num5 < 10) { 
//   console.log(num5)
//   num5++  // must have this , avoid endless loop
// }

//do while
// var num5 = 5
// do { 
//   console.log(num5)
//   num5++
// } while (num5 < 10)   
// do while at least run 1 time

//summary : for, while, do while can replace each other

//for  to count the number / number relatec
// while & do while can do more complex condtion , flexible than for
// while and do while have a different order, while  condition first operater then, do while operate once then condition
// do while at least once, while may 0


// continue break continue will jump out this loop and jump in next
// for (var k = 1; k <= 5; k++) { 
//   if (k === 3) { 
//     continue
//   }
//   console.log('k is ' + k)
// }

//break  jump out the loop
// for (var k = 1; k <= 5; k++) { 
//   if (k === 3) { 
//     break
//   }
//   console.log('k is ' + k)
// }


//naming rules , name a variable should be meanful