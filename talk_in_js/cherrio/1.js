// 对象是由方法和属性构成 语法 
// 1. 构建一只鸭子
// 2.招募1000只鸭子
// 3.告诉国王你完成任务了

// JSON Object 对象字面量 literal Object
var durk = {
    tpye : '煌上煌',
    yz : 99,
    durkSing : function(){
        console.log('嘎嘎嘎')
    }
}

var jiajun = {
    name : "佳骏",
    durkSing : function(){
        console.log('嘎嘎嘎')
    }
}

var xyl = {
    name : '元隆 ',
    durkSing : '嘎嘎嘎'
}

const xgg = [jiajun,xyl]

durk.durkSing();
//js 里面有array类型吗？

// 数据类型 数值类型Number 字符串string 布尔值boolean null undefined
//undefined
 var cherrio //关键字 标识符
//  console.log(cherrio)//undefined
//  console.log(typeof cherrio)//undefined
//  变量的类型由值决定
 cherrio = []
//  console.log(cherrio)
//  基础类型不包括array array只是object的一个子类型
//  console.log(typeof cherrio)

for(var i = 0; i < 999 ; i++){
    cherrio.push(durk)
}

for(var i = 0; i < xgg.length ;i++){
    if(typeof xgg[i].durkSing == 'function'){
        cherrio.push(xgg[i])
    }
}



if (cherrio.length === 1000){
    console.log('已经招募完成，报告国王')
}

for (let singer of cherrio){//es6 循环
    singer.durkSing();
}

// var array = []
// for(var i = 0; i < 1000 ; i++){
//     array[i] = duck
// }
