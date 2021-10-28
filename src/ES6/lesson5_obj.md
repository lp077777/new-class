Object Update
Object
Enhanced Object Properties
Property Shorthand

在 ES6 之前 Object 的属性必须是 key-value 形式，如下：

var x = 0, y = 0;
obj = { x: x, y: y };
在 ES6 之后是可以用简写的形式来表达：

var x = 0, y = 0
obj = { x, y }
Computed Property Names

在 ES6 之前 Object 的 key 在定义时必须是字符串，如果想增加“动态”的 key，必须是先计算出 key，利用 object[key] = value 的方式来修改；

在 ES6 之后可以直接用变量或者表达式来定义 key。

let obj = {
  foo: 'bar',
  (['baz'+ quux()]): 42
}
[!DANGER]
上述代码中不应该有()直接书写['baz'+ quux()]就可以，之所以这么写是 markdown 高亮插件还不支持计算属性。

而不用在这样写

var obj = {
  foo: 'bar'
}
obj['baz' + quux()] = 42
Method Properties

从 ES6 开始对象内的方法可以简写，包括常规函数和异步函数。

let obj = {
  foo (a, b) {

  },
  bar (x, y) {

  },
  * quux (x, y) {

  }
}
在 ES5 时代只能这样写

var obj = {
  foo: function (a, b) {

  },
  bar: function (x, y) {

  }
  //  quux: no equivalent in ES5
}
[!WARNING]
ES5 时代 Object 的属性只支持常规函数，对于异步函数是不支持的

Set
在 JavaScript 里通常使用 Array 或 Object 来存储数据。但是在频繁操作数据的过程中查找或者统计并需要手动来实现，并不能简单的直接使用。
比如如何保证 Array 是去重的，如何统计 Object 的数据总数等，必须自己去手动实现类似的需求，不是很方便。
在 ES6 中为了解决上述痛点，新增了数据结构 Set 和 Map，它们分别对应传统数据结构的“集合”和“字典”。首先，我们先来学习下 Set 数据结构。

生成 Set 实例

let s = new Set()
可以定义一个空的 Set 实例，也可以在实例化的同时传入默认的数据。

let s = new Set([1, 2, 3, 4])
[!TIP]
初始化的参数必须是可遍历的，可以是数组或者自定义遍历的数据结构。

添加数据

s.add('hello')
s.add('goodbye')
或者

s.add('hello').add('goodbye')
[!NOTE]
敲黑板了，Set 数据结构不允许数据重复，所以添加重复的数据是无效的

删除数据

删除数据分两种，一种是删除指定的数据，一种是删除全部数据。

// 删除指定数据
s.delete('hello') // true
// 删除全部数据
s.clear()
统计数据

Set 可以快速进行统计数据，如数据是否存在、数据的总数。

// 判断是否包含数据项，返回 true 或 false
s.has('hello') // true
// 计算数据项总数
s.size // 2
查询数据

keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：使用回调函数遍历每个成员
for…of：可以直接遍历每个成员
console.log(s.keys()); // SetIterator {"hello", "goodbye"}
console.log(s.values()); // SetIterator {"hello", "goodbye"}
console.log(s.entries()); // SetIterator {"hello" => "hello", "goodbye" => "goodbye"}
s.forEach(item => {
  console.log(item) // hello // goodbye
})
for (let item of s) {
  console.log(item)
}
// hello
// goodbye
[!TIP]
不理解 SetIterator 没关系，后面会讲遍历器，耐心一点！

思考
因为 Set 中的值总是唯一的，所以需要判断两个值是否相等，那么 +0,-0,NaN,undefined可以被重复添加吗？
Set 对存储的类型是不限的，如果想限制只能存储对象，该怎么办？请使用 WeakSet!
Map
前面我们讲过 Set 和 Map 的背景，Map 是用来实现字典的功能（Object 键值对）。我们来看下它的用法：

实例化

let map = new Map([iterable])
Iterable 可以是一个数组或者其他 iterable 对象，其元素为键值对(两个元素的数组，例如: [[ 1, ‘one’ ],[ 2, ‘two’ ]])。 每个键值对都会添加到新的 Map。null 会被当做 undefined。

添加数据

let keyObj = {}
let keyFunc = function () {}
let keyString = 'a string'

// 添加键
map.set(keyString, "和键'a string'关联的值")
map.set(keyObj, '和键keyObj关联的值')
map.set(keyFunc, '和键keyFunc关联的值')
删除数据

// 删除指定的数据
map.delete(keyObj)
// 删除所有数据
map.clear()
统计数据

// 统计所有 key-value 的总数
console.log(map.size) //2
// 判断是否有 key-value
console.log(map.has(keyObj)) // true
查询数据

get() 方法返回某个 Map 对象中的一个指定元素
keys() 返回一个新的 Iterator 对象。它包含按照顺序插入 Map 对象中每个元素的 key 值
values() 方法返回一个新的 Iterator 对象。它包含按顺序插入Map对象中每个元素的 value 值
entries() 方法返回一个新的包含 [key, value] 对的 Iterator ?对象，返回的迭代器的迭代顺序与 Map 对象的插入顺序相同
forEach() 方法将会以插入顺序对 Map 对象中的每一个键值对执行一次参数中提供的回调函数
for…of 可以直接遍历每个成员
console.log(map.get(keyObj)) // 和键keyObj关联的值
console.log(map.keys()) // Iterator
console.log(map.values()) // Iterator
console.log(map.entries()) // Iterator
map.forEach((value, key, map) => {
  console.log(value, key, map)
}, thisArg)
for ([key, value] of map) {
  console.log(key, value)
}
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach

其实 Object 也是按键值对存储和读取的，那么他俩之间除了我们之前说的区别以外还有其他的吗？

键的类型

一个Object的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值，包括函数、对象、基本类型。

键的顺序

Map 中的键值是有序的，而添加到对象中的键则不是。因此，当对它进行遍历时，Map 对象是按插入的顺序返回键值。

键值对的统计

你可以通过 size 属性直接获取一个 Map 的键值对个数，而 Object 的键值对个数只能手动计算。

键值对的遍历

Map 可直接进行迭代，而 Object 的迭代需要先获取它的键数组，然后再进行迭代。

性能

Map 在涉及频繁增删键值对的场景下会有些性能优势。

Object.assign()
Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象。

const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }

const returnedTarget = Object.assign(target, source)

console.log(target)
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget)
// expected output: Object { a: 1, b: 4, c: 5 }
基本语法

Object.assign(target, …sources)

参数	含义	必选
target	目标对象	Y
sources	源对象	N
[!TIP]
从语法上可以看出源对象的个数是不限制的（零个或多个），如果是零个直接返回目的对象，如果是多个相同属性的会被后边的源对象的属相覆盖。

let s = Object.assign({ a: 1 })
// {a: 1}
[!WARNING]
如果目的对象不是对象，则会自动转换为对象

let t = Object.assign(2)
// Number {2}
let s = Object.assign(2, { a: 2 })
// Number {2, a: 2}