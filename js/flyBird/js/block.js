function Block(){
    this.upDivWrap = null //顶部管道
    this.downDivWrap = null // 底部管道
    this.downHeight = baseObj.randomNum(0,150) //下部管道高度
    this.gapHeight = baseObj.randomNum(150,160)
    this.blockRunTimer = null
    
    this.upHeight = 363 - this.downHeight - this.gapHeight
    

    //用生成div的方法来放管道
    this.createDiv = function(url,height,positionType,left,top) {
        var newDiv = document.createElement('div')
        newDiv.style.width = 62 + 'px'
        newDiv.style.height = height
        newDiv.style.position = positionType
        newDiv.style.left = left
        newDiv.style.top = top
        newDiv.style.backgroundImage = url
        return newDiv
    }
    this.createBlock = function() {
        var upDiv1 = this.createDiv('url(img/up_mod.png)',this.upHeight + 'px',)
        var upDiv2 = this.createDiv('url(img/up_pipe.png)','60px')
        this.upDivWrap = this.createDiv(null,null,'absolute','450px')
        this.upDivWrap.appendChild(upDiv1)
        this.upDivWrap.appendChild(upDiv2)//生成上方管道
        
        //生成下方管道
        var downDiv1 = this.createDiv('url(img/down_mod.png)',this.downHeight + 'px')
        var downDiv2 = this.createDiv('url(img/down_pipe.png)','60px')
        this.downDivWrap = this.createDiv(null,null,'absolute','450px',(this.upHeight + this.gapHeight)+'px')
        this.downDivWrap.appendChild(downDiv2)
        this.downDivWrap.appendChild(downDiv1)
        
        jsWrapBg.appendChild(this.upDivWrap)
        jsWrapBg.appendChild(this.downDivWrap)//在页面中放入管道
        
      
        
        
    }
    // this.blockRun = function(){
    //     var that = this
    //     this.blockRunTimer = setInterval(run,60)
    //     function run() {
    //        if(that.downDivWrap.offsetLeft < -60){
    //            clearInterval(that.blockRunTimer)
    //        }
    //        that.downDivWrap.style.left = that.downDivWrap.offsetLeft-3 + 'px'
    //        that.upDivWrap.style.left = that.upDivWrap.offsetLeft-3 + 'px' 
    //     }
    // }
    this.moveBlock = function() {//控制管道移动的方法
        this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + 'px'
        this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 + 'px'
        

    }
 
    
}