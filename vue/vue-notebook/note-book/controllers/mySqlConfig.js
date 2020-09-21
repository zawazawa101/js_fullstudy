var mysql = require('mysql')
var config = require('./defaultConfig')

// 连接线程池

var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})


// 统一链接数据库的代码

let allServices = {
  query: function(sql, values) {
    return new Promise( (resolve, reject) => {
      pool.getConnection( function(err, connection) { // 建立数据库链接
        if(err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => { //在数据库处理数据
            if(err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release() // 释放链接
          })
        }
      })
    })
  }
}

// 读取user表所有数据，
let getAllUsers = function() {
  let _sql = `select * from users;`
  return allServices.query(_sql)
}

//用户登录
let userLogin = function(username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
  return allServices.query(_sql)
}


// 查找用户 
let findUser = function(username) {
  let _sql = `select * from users where username="${username}";`
  return allServices.query(_sql)
}

// 用户名注册
let insertUser = function(value) {
  let _sql = `insert into users set username=?, userpwd=?, nickname=?;`
  return allServices.query(_sql, value)
}


// 根据类型查找日记列表
let findNoteListByType = function(note_type, userId) {
  let _sql = `select * from note where note_type="${note_type}" and useID="${userId}";`
  return allServices.query(_sql)
}


let findNoteDetailById = function(id) {
  let _sql = `select * from note where id="${id}";`
  return allServices.query(_sql)
}


// 发表日记
let insertNote = function(options) {
  let _sql = `insert into note set c_time=?,m_time=?,note_content=?,head_img=?,title=?,note_type=?,useId=?,nickname=?;`
  return allServices.query(_sql, options)
} 


// 导出方法
module.exports = {
  getAllUsers,
  userLogin,
  findUser,
  insertUser,
  findNoteListByType,
  findNoteDetailById,
  insertNote
}