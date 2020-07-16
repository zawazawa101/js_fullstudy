// 一个对象属性的值可以是另一个对象



// var flight = {
//     // 创建一个航班对象对象
//     airline : 'SYD',
//     number : 815 ,
//     departure : {
//         IATA : 'SYD',
//         time : '2004-09-22 14:55',
//         city : 'Sydney'
//     },
//     arrival : {
//         IATA : 'LAX',
//         time : '2004-09-23 10:42',
//         city : 'Los Angeles'
//     }
// }

// console.log(flight.airline)            // "SYD"
// console.log(flight["airline"])          //"SYD"

// flight.flytime = "20hours"
// console.log(flight.flytime)

// var a = {}
// var b = {}
// Object.setPrototypeOf(a,b)//将b设置为a的原型

// 深拷贝
// var obj = {a:{b:10}};
// function deepCopy(obj){//第一次传进来的是{a：{b：10}}       }  
//     if(typeof obj != 'object'){
//         return obj;//第一次判断为false 不执行if语句
//     }
//     var newobj = {};//创建一个新对象
//     for ( var attr in obj) {//for in 枚举 由于obj只有一个属性
//         newobj[attr] = deepCopy(obj[attr]);//实际newobj[a] = deepCopy(obj[a]),递归调用deeCopy，即执行deepCopy({b:10})
//                                            //第二次传进来的是{b：10}， if语句判断为flase 不执行if语句 此时函数继续运行，
     
//      //newobj[a] = deepCopy({b:10}) == newobj2[b] == deeCopy(10) == 10
//      //   a      ：                        {b：                     10}
//                                            //接着创建一个新的newobj2（为了区别第一次创建的newobj）用来接收 {b：10}，
//                                            //接着for in 枚举{b：10}，newobj2[b] = deepCopy(obj[b])即等于deepCopy(10)
//                                            //第三次调用deepCopy(10) 此时if语句判断为ture reture返回10 下面的函数不再调用
//                                            //递归结束
                                           
//     }
//     return newobj;
// }
// var obj2 = deepCopy(obj);
// obj2.a.b = 20;
// console.log(obj.a.b);
// console.log(obj) 
// console.log(obj2)

// var objt = {a:10}
// var o = objt
// objt.a = 20
// console.log(o.a)
// var objt = {a:{b:10}}
// console.log(objt.a.b)
// console.log(objt["a"]["b"])

// var objt = {a:10}
// function shallowCopy(objt){
//     var newobjt = {}
//     for (var attr in objt){
//     newobjt[attr] = objt[attr]    
//     }
//     return newobjt
// }
// var newobjt = shallowCopy(objt)
// objt.a = 20
// console.log(newobjt.a)

// var a = {a:10}
// var b = {b:3}
// Object.setPrototypeOf(a,b)//将b设为a的原型
// console.log(a.b)//3

function A(name,age){
    this.name = 'xiaohong'
    this.age = 14
}
var person = new A()
console.log(person)
A.prototype.hobby = function(){
    return 'play basketball'
}
console.log(A.prototype)
console.log(person.hobby())
console.log(person.constructor) 
console.log(person._proto_)
console.log(Object.getPrototypeOf(person))
var obj = {
    a:10
}
function func(){
    console.log(this)
}
func.call(obj)

function Cat(age,name){
    this.name='cat';
    console.log(this);
    console.log('cat: age:'+age+",name:"+name);
}
var cat=new Cat(4,'Bob')  
Cat.call(this,3,'Tom')  


function A(name){
    this.name = 'cat'
    this.name = name
    console.log(this)
}
var a = new A('dog')
   
