let response = `
    <html>
    <head>
    <style>
    #myid{
      width:500px;
      display: flex;
      background-color: rgb(0, 0, 255);
      align-items: center;
      height: 500px;
      justify-content: center;
      flex-direction: row;
    }
    .cls1 {
      width: 200px;
      height: 100px;
      background-color: rgb(255, 0, 0);
    }
    .cls2 {
      width: 200px;
      height: 200px;
      background-color: rgb(0, 255, 0);
    }
    </style>
    </head>
    <body>
      <div id="myid">
        <div class="cls1"></div>
        <div class="cls2"></div>
      </div>
    </body>
    </html>
  `

// 解析成 DOM 树
// 分词(词法分析)(FSM) -> 语法分析(LL, LR) -> AST(抽象语法树)(DOM 树)

// 拿出标签名 (开始 结束)

function data(c) {
  if (c === '<') {
    return tagOpen
  }
  return data
}

let currentToken = null
let currentAttr = null
let stack = [
  {type: 'document', children: []}
]
function emitToken(token) {
  token = {
    ...token,
    children: [],
    nodeType: 'element'
  }
  let top = stack[stack.length - 1]
  if(token.type === 'startTag') {
    stack.push(token)
    top.children.push(token)
  } else {
    if (top.tagName === token.tagName) {
      stack.pop()
    }
  }
}

function tagOpen(c) {
  if( c === '/') {
    currentToken = {
      type: 'endTag',
      tagName: ''
    }
    return tagName
  }
  currentToken = {
    type: 'startTag',
    tagName: c
  }
  return tagName
}

function tagName(c) {
  if (c.match(/[a-z]/)) {
    currentToken.tagName += c
    return tagName
  } else if(c === '>') {
    emitToken(currentToken)
    return data
  } else if(c.match(/[\t\n\f ]/)) {
    currentAttr = {
      key: '',
      value: ''
    }
    return attrName
  }
}

function attrName(c) {
  if(c.match(/[a-z]/)) {
    currentAttr.key += c
    return attrName
  } else if(c === '=') {
    return attrValue
  }
}
function attrValue(c) {
  if(c === '"' || c === '"') {
    return attrValue
  } else if (c.match(/[a-z0-9]/)) {
    currentAttr.value += c
    return attrValue
  } else {
    if (currentToken && !currentToken.attrs) {
      currentToken.attrs = []
    } 
    currentToken.attrs.push(currentAttr)
    return tagName(c)
  }
}
function parseDom(html) {
  let state = data
  for (let c of html) {
    state = state(c)
  }
}
parseDom(response)
console.log(JSON.stringify(stack, null, 2))


// function stringfy(data) {
//   let str = ''
//   if (typeof data !== 'object') {
//       return data;
//   }
//   if (Array.isArray(data)) {
//       str += '['
//       for (let ele of data) {
//           str += stringfy(ele)
//           str += ','
//       }
//       str += ']'
//   } else if (!Array.isArray(data) && typeof data === 'object') {
//       str += '{'
//       for (let key in data) {
//           str += `"${key}"`;
//           str += ':'
//           str += stringfy(data[key])
//           str += ','
//       }
//       str += '}'
//   }
//   return str;
// }
// var a = {
// a: 1,
// b: [{b: 2}, 2, 3, {c: 4}, [4, [5, [6, 7]]]]
// }
// console.log(JSON.stringify(a));
// console.log(stringfy(a));
