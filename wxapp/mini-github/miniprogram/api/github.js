const trendings = () => new Promise((resolve,reject) => {
  const url = "https://github-trending-api.now.sh/repositories"
  wx.request({
    url,
    success: res => {
      console.log(res)
      resolve(res)
    }
  })
})
const getRepo = () => new Promise((resolve,reject) => {

})
module.exports ={
  trendings,
  getRepo
}