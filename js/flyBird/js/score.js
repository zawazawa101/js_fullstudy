var score = {
    imgIndex : 0,
    div : document.createElement('div'),
    showScore : function(parentObj){
        this.div.style.width = '28px'
        this.div.style.height = '39px'
        this.div.style.background = 'url(./img/' + this.imgIndex + '.jpg)'
        this.div.style.position = 'absolute'
        this.div.style.top = '80px'
        this.div.style.left = '150px'
        this.div.style.zIndex = 2
       parentObj.appendChild(this.div)
    }
}
var score1 = {
    div : document.createElement('div'),
    showScore : function(parentObj){
        this.div.style.width = '28px'
        this.div.style.height = '39px'
        this.div.style.position = 'absolute'
        this.div.style.top = '80px'
        this.div.style.left = '178px'
        this.div.style.zIndex = 2
       parentObj.appendChild(this.div)
    }
}