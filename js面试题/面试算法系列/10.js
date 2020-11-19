let myDate = new Date()
let mytime =  myDate.toLocaleDateString()
console.log(mytime.length);
 let myDay = myDate.getDay()
 
console.log(mytime);


const date = new Date(1477019804 * 1000)
console.log(date);
console.log(typeof new Date().getTime());
function isNewWeek(timestamp) {
  let nowDate = new Date()
  let newDay = nowDate.toLocaleDateString()
  let nowWeekDay = nowDate.getDay()
} 
function getWeekDay(day) { 
  switch(day) {
    case 0 : // 代表今天星期天，所以返回数组 [-6, 0]
      return [-6, 0]
    case 1 : // 代表今天是星期一，所以返回数组 [0, 6]
      return [0, 6]
    case 2: 
      return []
  }
}