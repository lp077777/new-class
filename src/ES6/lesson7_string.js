//ES5
// let a = 10
// console.log('this is ' + a)
// //ES6
// console.log(`this is ${a} and this is another ${a}`)

//
// const retailPrice = 20
// const wholeSalePrice = 18
// const type = 'retail'
// let showTxt = ''
// if (type === 'retail') {
//   showTxt = `this is retail price ${retailPrice}`
// } else { 
//   showTxt = `this is whole sale price ${wholeSalePrice}`
// }
// console.log(showTxt)

// function Price(strings, type) {
//   console.log(strings)
//   let s1 = strings[0]
//   let s2 = strings[1]
//   const retailPrice = 20
//   const wholeSalePrice = 18
//   let showTxt = ''
//   if (type === 'retail') {
//     showTxt = `this is retail price ${retailPrice}`
//   } else { 
//     showTxt = `this is whole sale price ${wholeSalePrice}`
//   }
//   return `${s1}${showTxt} ${s2}`
// }
// let result = Price`this is ${'retail'}aaaaaaa`
// console.log(result)

// let k = 'this is first line \nthis is seconde line'

let k = `this is first line
this is second line`

console.log(k)