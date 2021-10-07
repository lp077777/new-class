//ES5 loop

const arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
	// if (arr[i] === 2) {
	//   break
	// }
	if (arr[i] === 2) {
		continue
	}
	console.log(arr[i])
}

//forEach
arr.forEach((item) => console.log(item)) //forEach not support break & continue
arr.every((item) => {
	console.log(item)
})
arr.every((item) => {
	console.log(item)
	return true
	// if(item ===2){} else {console.log(item)}  if you want to be like continue
})
//forEach cannot control, but every can be controlled

//for in  used for obj
//arr.a = 8
for (let i in arr) {
	// if (i === 2) {
	//   continue
	// }
	// index is string , not a number
	if (i === '2') {
		continue
	}
	console.log(i, arr[i])
}
//for in support break and continue, but the index is string not number

//before ES6, only array and object can loop
//for of
for (let item of arr) {
	console.log(item)
}

const price = {
	A: [1, 2, 3, 4, 5],
	B: [3, 4, 5],
	C: [0.5, 0.8, 0.9],
}

for (let key in price) {
	console.log(key, price[key])
}
