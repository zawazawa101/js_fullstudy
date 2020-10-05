const net = require('net')
// TCP 
//进程间的通信：net

// 1. 客户端发送请求报文
const client = net.createConnection({
  port: 8088
}, () => {
  let jsonStr = JSON.stringify({a: 1, b: 2})
  client.write('GET / HTTP/1.1\r\n')
  client.write('HOST: 127.0.0.1\r\n')
  client.write('Content-Type: application/json\r\n')
  client.write('\r\n')
  client.write(jsonStr)
  client.end()
})

// 客户端得到服务端返回的响应报文
client.on('data', (date) => {
  console.log('收到后端的数据', date.toString());
})

// 2. 解析 拿到响应体
// html -> (有限状态机) DOM 树
