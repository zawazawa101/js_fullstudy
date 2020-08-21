// 人口文件
import React from "react" // es6 import  全面使用es6语法
import ReactDom from "react-dom"
import "./styles.css"  // css  WXSS  global.css
import {MyComponent} from './demo.js'
// react 语法  小程序 


function App() {
  return (
    // WXML JSX  类似模板
    <div className = "App">
      App 
      <MyComponent />
    </div>
  )
}

const rootElement =  document.getElementById('root')

ReactDom.render(<App/>, rootElement)