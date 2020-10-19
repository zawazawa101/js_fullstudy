// 保证一个类只有一个实例  并提供一个访问他的全局访问点

// class SingleDog {

//   show () {
    
//   }
//   static getInstance() {
//     // 判断是否被new过
//     if(!SingleDog.instance) {
//       SingleDog.instance = new SingleDog()
//     }
//     return SingleDog.instance
//   }
// }

// const s1 = SingleDog.getInstance()
// const s2 = SingleDog.getInstance()

// console.log(s1 === s2);


console.log(1);

setTimeout(() => console.log(2), 0);

new Promise(resolve => {
  console.log(3);
  resolve();
}).then(() => console.log(4));

console.log(5);

// 1 3 5 4 2