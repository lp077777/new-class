//closure
// what is closure
// function books() { 
//   var book  = "learn closure"
// }
// console.log(book) //undefned
function a() { 
  b()
  function b() { 
    c()
    function c() { 
      console.log('this is c')
    }
  }
}
a()

// for example
function books() { 
  var book = 'this is inside book'
  return function () { 
    console.log(book)
  }
}
var bag = books()
bag()

for (var i = 0; i < 5; i++) { 
  (function (x) { 
    setTimeout(function () { 
      console.log(x++)
    })
  })(i)
}
console.log(i) 
