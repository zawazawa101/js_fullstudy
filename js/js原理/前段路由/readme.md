## 前端路由

1. 如何改变url却不引起页面的刷新
2. 如何知道url变化了？



hash
通过hashchange事件 监听 url的变化

改变url的方式
 - 通过浏览器的前进 后退来改变url
 - 通过a标签改变url
 - 通过window.location改变url
以上这几种情况改变url 都会触发 hashchange事件


history
 通过了pushState方法 和 replaceState两个方法， 这两个方法改变url的path部分不会引起页面刷新
 通过监听popstate事件 来监听url的变化 
   

  改变url的方式
  - 通过浏览器的前进 后退来改变url
  - 通过pushState/replaceState或a标签来改变url会触发popState事件








history