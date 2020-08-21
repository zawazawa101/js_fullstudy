// import React from "react"
// import "./demo.css"

// export const MyComponent = () => {
//   // setState setData
//   //l 类似 data:{
//    // myName: 'john Doe'
//   //} MVVM
//   const [myName, setMyName] = React.useState('John Doe')
//   return (
//     // template 不是html
//     <div>
//       <h2 className="title">{myName}</h2>
//       <input 
//           value = {myName}
//           onChange = {(e) => setMyName(e.target.value) }
//           />
//     </div>
//   )
// }


import React from "react"
export const MyComponent  = () => {
  const [username, setUsername] = React.useState('')
  const [list, setList] = React.useState([])
  // onload
  React.useEffect(() => {
    // setTimeout(() => {
    //   setUsername('John')
    // }, 1500)
    fetch(
      'http://neteasecloudmusicapi.zhaoboy.com/toplist/detail'
    ).then(data => data.json())
    .then(data => {
      setList(data.list)
    })
  },[]) // 等于小程序的onload
  return (
    <div>
       <h4>{username}</h4>
       <input 
          value = {username} 
          onChange = {e => setUsername(e.target.value)} 
          />
       <ul>
        {
          list.map(item => <li>{item.description}</li>)
        }

       </ul>
    </div>
  )
}