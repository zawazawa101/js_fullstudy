//判断是不是回文数
var isPalindrome = function(x) {
   return x == x.toString().split('').reverse().join('')*1
}   
/**
 * @param {number} x
 * @return {boolean}

var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x < 10) return true; 
    let right = 1;
    let left = 0;//初始为 x的总位数
    let sum = x;
    while(sum >= 1){//算出总位数
        sum /= 10;
        left++;
    }
    //获取第n位的数
    let getNum = (_x, n) => {
        return Math.floor(_x % Math.pow(10, n) / Math.pow(10, n - 1));
    }
    while(left > right){
        if(getNum(x, left) != getNum(x, right)) return false;
        left--;
        right++;
    }
    return true;
};
 */

  


