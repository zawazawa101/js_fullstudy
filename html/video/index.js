// console.log(document.getElementById('test'))
var bar =  document.querySelector('.speed-bar')
var speed = document.querySelector('.speed')
var video = document.querySelector('.flex')

function handleMove(e) {
   var y = e.pageY - this.offsetTop
   var percent = y / this.offsetHeight
   var min = 0.4
   var max = 4
   var height = Math.round(percent * 100) + '%'
   bar.style.height = height;
   var playbackRate = percent * ( max - min ) + min
   bar.textContent = playbackRate.toFixed(2) + 'x'
   video.playbackRate = playbackRate;

}

speed.addEventListener('mousemove' , handleMove) 