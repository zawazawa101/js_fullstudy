 1.
//<div class="parent">
//     <div class="child1">child1 content</div>
//     <div class="child2">child2 content</div>
//     <div class="child3">child3 content</div>
//</div>
//   .child2{
//     transform: translateY(200px)  
//   }
// 问: child1 和 child2 和 child3的位置怎么变?
// 答： child1 和 child3位置不变 ，child2往下移200px, transform属性不会使其文档脱离文档流
2.
//js
// DomA.style.width = DomA.offsetWidth + 1 + 'px'  //不会
// DomB.style.width = DomA.offsetWidth + 1 + 'px'  // 第一次:force layout
// DomC.style.width = DomA.offsetWidth + 1 + 'px'  // 第二次：force layout
// 最后 第三次：force layout
// 会触发几次回流 ? 3次
// 对上述代码进行优化?
// 用一个变量来存储DomA.offset的值，避免多次强制重绘 => 读写分离
// const width = DomA.offsetWidth 


// 2(1)
// DomA.style.width = 1px;
// DomB.style.width = 1px;
// DomC.style.width = 1px;
//又会触发几次回流呢 ? // 1 次

// 2(2)
// let el = document.getElementById('app');
// el.style.width = (el.offsetWidth+1) + 'px';
// el.style.width = 1 + 'px'
// 引发几次回流?几次重绘? 
// 1次回流， 一次重绘

3.
// float 用途： 实现文字图片环绕
// float 如何清除浮动?
// css的clear属性， BFC容器特性

4.
// repeat 实现，使用JS实现一个repeat方法，
//     调用这个 repeatedFunc("hellworld")，
//     会alert4次 helloworld, 每次间隔3秒
//     function repeat(func, times, wait) {
  
//     }
//     const repeatFunc = repeat(alert, 4, 3000)
//     repeatedFunc("hellworld")

// 函数是一等公民: 函数可以被当做形参传递，也能被作为返回值返回
// function repeat(func, times, wait) {
//   return (str) => {
//     for(let i = 0; i < times; i++) {
//       setTimeout(() => {
//         func(str)
//       }, i * wait)
//     }
//   }
// }
// function alert(str) {
//   console.log(str);
// }
// const repeatFunc = repeat(alert, 4, 3000)

// repeatFunc("hellworld")
5.
// 用过的数组的哪些方法  低阶api： push() pop() ...  高阶api：foreach map filter reduce
// map 的使用方法 , 能不能自己写 一个 map 呢?
// Array.prototype.map = (fnc) => {
//   let arr = this // 原数组
//   let array = [] // 要返回的新数组
//   for(let i = 0; i < arr.length; i++) {
//     let num = arr[i]
//     array.push(fnc(num, i, arr)) 
//   }
//   return array
// }
6.
// CORS 设置 CORS 的头部字段
// cross origin resource share
// Access-control-allow-origin: *
// Access-control-allow-method: 
// Access-control-allow-headers: content-type

