Desctructuring
Desctructuring
在 ES6 中新增了变量赋值的方式：解构赋值。如果对这个概念不了解，我们可以快速展示一个小示例一睹风采：

let arr = ['Ilya', 'Kantor']
let firstName = arr[0]
let surname = arr[1]
想从数组中找出有意义的项要单独赋值给变量（一一的写），在 ES6 中就可以这样写了：

let [firstName, surname] = ['Ilya', 'Kantor']
console.log(firstName) // Ilya
console.log(surname) // Kantor
[!TIP]
解构赋值重点是在赋值，赋值的元素是要拷贝出来赋值给变量，赋值的元素本身是不会被改变的。

是不是非常的刺激，在解构赋值里用的最多的就是 Object 和 Array ，我们可以分别来看下两者的解构赋值是如何操作的。

Array Destructuring
上述的小示例已经在描述数组的解构赋值了，可是那只是开始。

可以跳过赋值元素

如果想忽略数组的某个元素对变量进行赋值，可以使用逗号来处理。

// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log( title ); // Consul
赋值元素可以是任意可遍历的对象

赋值的元素不仅是数组，它可以是任意可遍历的对象

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
左边的变量

被赋值的变量还可以是对象的属性，不局限于单纯的变量。

let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

console.log(user.name); // Ilya
循环体

解构赋值在循环体中的应用，可以配合 entries 使用。

let user = {
  name: "John",
  age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`); // name:John, then age:30
}
当然，对于 map 对象依然适用：

let user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user.entries()) {
  console.log(`${key}:${value}`); // name:John, then age:30
}
rest 参数

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar

// Note that type of `rest` is Array.
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2
[!WARNING]
我们可以使用 rest 来接受赋值数组的剩余元素，不过要确保这个 rest 参数是放在被赋值变量的最后一个位置上。

默认值

如果数组的内容少于变量的个数，并不会报错，没有分配到内容的变量会是 undefined。

let [firstName, surname] = [];

console.log(firstName); // undefined
console.log(surname); // undefined
当然你也可以给变量赋予默认值，防止 undefined 的情况出现：

// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

console.log(name);    // Julius (from array)
console.log(surname); // Anonymous (default used)
Object Destructuring
基本用法

解构赋值除了可以应用在 Array，也可以应用在 Object。基本的语法如下：

let {var1, var2} = {var1:…, var2…}

大致的意思是我们有一个 Object 想把里面的属性分别拿出来而无需通过调用属性的方式赋值给指定的变量。具体的做法是在赋值的左侧声明一个和 Object 结构等同的模板，然后把关心属性的 value 指定为新的变量即可。

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
[!TIP]
在这个结构赋值的过程中，左侧的“模板”结构要与右侧的 Object 一致，但是属性的顺序无需一致。

上述的赋值左侧是采用了对象简写的方式，类似于：

let {title: title, width: width, height: height} = options;
如果不想这么写或者想使用其他的变量名，可以自定义的，如下：

let {width: w, height: h, title} = options;
默认值

当然，这个赋值的过程中也是可以指定默认值的，这样做：

let options = {
  title: "Menu"
};

let {width = 100, height = 200, title} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
rest 运算符

如果我们想象操作数组一样，只关心指定的属性，其他可以暂存到一个变量下，这就要用到 rest 运算符了

let options = {
  title: "Menu",
  height: 200,
  width: 100
};

let {title, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100
嵌套对象

如果一个 Array 或者 Object 比较复杂，它嵌套了 Array 或者 Object，那只要被赋值的结构和右侧赋值的元素一致就好了。

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true    // something extra that we will not destruct
};

// destructuring assignment on multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut
