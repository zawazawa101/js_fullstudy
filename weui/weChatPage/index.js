let send = document.getElementById('send')
let ul = document.getElementById('ul')
console.log(ul)
send.addEventListener('click',function(){
  let li = document.createElement('li')
  li.setAttribute('class','content-item')
  let divPic = document.createElement('div')
  divPic.setAttribute('class','pic')
  li.appendChild(divPic)
  let img = document.createElement('img')
  img.setAttribute('src','./images/user.jpg')
  divPic.appendChild(img)

  let divMessage = document.createElement('div')
  divMessage.setAttribute('class','message')
  li.appendChild(divMessage)
  let p1 = document.createElement('秋多班')
  p1.setAttribute('class','name')
  p1.innerHTML = '秋多班'

  let p2 = document.createElement('p')
  p2.setAttribute('class','detail')
  p2.innerHTML = 'XX拍了拍XX的头'

  divMessage.appendChild(p1)
  divMessage.appendChild(p2)
  
  ul.appendChild(li)
  console.log(li)

})