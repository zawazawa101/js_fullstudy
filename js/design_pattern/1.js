/**
*功能：计算年收益
*@author jjp
*@data 2020-7-16
*@params {salary 工资 number}
*{level 评级 string}
*@return 年收益 number
*/
function calculateBonus(salary, level = 'C'){
    if(typeof +salary != 'number' || salary < 0){
        throw new Error('工资必须是整数')
    }
    if(!['A','B','C','D','S'].indexOf(level)){
        throw new Error('错误的等级')
    }
    salary = parseInt(salary)
    // if(typeof salary == "number" && typeof level == "string" && salary == 20000 && ( level.toUpperCase() >= 'A' && level.toUpperCase() <= 'D')){
    if (level == 'D'){
        return salary * 12
    }
    else if (level == 'B'){
        return salary * 18
    }
    else if (level == 'A'){
        return salary * 20
    }
    else if(level == 'S'){
        return salary * 100 
    }
    return salary * 16 
    // // }
    // else {console.log('输入的参数有误')}
}
console.log(calculateBonus(20000))
