//Promise
//callback hell
// function loadScript(src,callback) {
//   let script = document.createElement('script')
//   script.src = src
//   //callback()
//   document.head.append(script)
// }
// loadScript('./lesson1_scope.js',test)
 
// function test(name) { 
//   console.log(name)
// }
// test() // why test first how to fix

// add callback still not working , how to change the function
// function loadScript(src,callback) {
//     let script = document.createElement('script')
//     script.src = src
//    script.onload = () => { callback(src)}
//     document.head.append(script)
// }
  
// loadScript('./lesson1_scope.js' ,function (script) { 
//   console.log(script)
//   loadScript('./lesson1_scope2.js', function (script) {
//     console.log(script)
//     loadScript('./lesson2_array.js', function (script) { 
//       console.log(script)
//     })
//    })
// })
//how about error ? 


function loadScript(src) { 
  return new Promise((resolve, reject) => {     //Promise accept an function as argument, the function has two arguments resolve, reject
    //when we new a promise , promise will be in pending state, it will be changed in future by resolve, reject
    //state:pending, result: undefined
    let script = document.createElement('script')
    script.src = src
    script.onload = () => { resolve(src) } //change state to fulfilled , result
    script.onerror = (err) => reject(err) // rejected, error
    document.head.append(script)
   })
}

loadScript('./lesson1_scope.js')
  .then(loadScript('./lesson1_scope2.js'))
  .then(loadScript('./lesson2_array.js'))
