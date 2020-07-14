整数反转
function reverse1(x) {
    var str = x.toString()
    var res = ''
    if (x > 0) {
        for (var i = str.length - 1; i >= 0; i--) {
            res = res + str[i]
        }
    }
    if (x < 0) {
        for (var i = str.length - 1; i > 0; i--) {
            res = res + str[i]
        }
        res = -res
    }
    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
        return 0
    }
    else { return res * 1 }
}

var a = reverse1(-123)
console.log(a)


