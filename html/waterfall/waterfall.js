window.onload = function() { 
    imgLocation("container","box")

 
}

//获取当前有多少张图片要摆放
function imgLocation(parent,content) {
    var cparent = document.getElementById(parent)//取出 parent容器Dom
    var ccontent  = getChildElement(cparent,content)//用自定义的getChildElement方法在parent容器中取出content盒子
    // console.log(ccontent)
    var imgWidth = ccontent[0].offsetWidth
    var num = Math.floor(document.documentElement.clientWidth / imgWidth)
    // cparent.style.width = imgWidth * num
    cparent.style.cssText = "width:" + imgWidth * num +"px"
    var BoxHeightArr =[]
    for(var i = 0; i < ccontent.length ;i++){
        if(i < num){
             BoxHeightArr.push(ccontent[i].offsetHeight)// BoxHeightArr[i] = ccontent[i].offsetHeight 
        }
        else{
            var minHeight = Math.min.apply(null,BoxHeightArr)
            var minIndex = getminHeightLocation(BoxHeightArr,minHeight)//将Math.min 方法借给数组用
            ccontent[i].style.position = 'absolute'
            ccontent[i].style.top = minHeight + 'px'
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight//更新高度
        }   
    }
    console.log(BoxHeightArr)
}
function getChildElement(parent,content){
    var contentArr = []
    var allcontent = parent.getElementsByTagName('*')//将parent下的所有内容全部取出
    for(var i = 0; i<allcontent.length; i++){//通过循环将类名为content的盒子取出并存放进数组里
        if(allcontent[i].className == content){
            contentArr.push(allcontent[i])
        }   
    }
    return contentArr  //函数返回contentArr这个数组
}
function getminHeightLocation(BoxHeightArr,minHeight) {
    for(var i in BoxHeightArr){
        if(BoxHeightArr[i] === minHeight){
            return i
        }
    }
}