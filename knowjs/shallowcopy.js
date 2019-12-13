/**
 * 深浅拷贝都是相对于引用类型的。
 * 浅拷贝：操作的是同一块内存
 * 深拷贝：深拷贝是开辟一块新的内存地址，将原对象的各个属性逐个复制进去
 */

// 浅拷贝实现的两种方式
// ① 简单的引用复制
function shallowClone(copyObj) {
  var obj = {}
  for (let i in copyObj) {
    obj[i] = copyObj[i]
  }
  return obj
}
var x = {
  a: 1,
  b: { f: { g: 1 } },
  c: [ 1, 2, 3 ]
};
var y = shallowClone(x);
console.log(y.b.f === x.b.f);     // true

// ② Object.assign 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。

var z = Object.assign(x);
console.log(z.b.f === x.b.f)
console.log('----下面是深拷贝的实现-------')

//  深拷贝的实现
//  ① JSON.parse(JSON.stringify(源对象))
//  JSON对象parse方法可以将JSON字符串反序列化成JS对象，stringify方法可以将JS对象序列化成JSON字符串，借助这两个方法，可以实现对象的深拷贝。

//例1
var source = { name:"source", child:{ name:"child" } } 
var target = JSON.parse(JSON.stringify(source));
target.name = "target";  //改变target的name属性
console.log(source.name); //source 
console.log(target.name); //target
target.child.name = "target child"; //改变target的child 
console.log(source.child.name); //child 
console.log(target.child.name); //target child

//例2
var source = { name:function(){console.log(1);}, child:{ name:"child" } } 
var target = JSON.parse(JSON.stringify(source));
console.log(target.name); //undefined

//例3
var source = { name:function(){console.log(1);}, child:new RegExp("e") }
var target = JSON.parse(JSON.stringify(source));
console.log(target.name); //undefined
console.log(target.child); //Object {}

// 这种方法使用较为简单，可以满足基本的深拷贝需求，而且能够处理JSON格式能表示的所有数据类型. 缺点：
// 但是对于正则表达式类型、函数类型等无法进行深拷贝(而且会直接丢失相应的值)。
// 还有一点不好的地方是它会抛弃对象的constructor。也就是深拷贝之后，不管这个对象原来的构造函数是什么，在深拷贝之后都会变成Object。
// 同时如果对象中存在循环引用的情况也无法正确处理。