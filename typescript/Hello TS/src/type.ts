// 其他常见的类型

//any

let notSure: any = 4
notSure = 'afdaf'
notSure()

//unknown
let value: unknown = true
value()   // 报错 虽然你可以把unknown赋值程任何类型，但是在你把它赋值前不能对它进行任何操作

//never

const empty: never[] = []
empty.push(1)// 不能往数组里加东西


function error(message: string): never {// 永远没有返回值
  throw new Error(message)
}

// 数组

const list: number[] = [1, 2, 3]
const list1: (string | number)[] = [1, 2, "3"] // 元组
const list2: Array<number> = [1, 2, 3] // 泛型

// 对象
let obj: object
obj = [1]
obj = [1, '2']
obj = function() {
  
}