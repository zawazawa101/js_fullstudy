import axios from 'axios';

const baseUrl = 'http://ustbhuangyi.com/sell/';

export function get(url) {
  return function (params = {}) {
    return axios.get(baseUrl + url, {
      params,
    }).then((res) => {
      const { errno, data } = res.data // 对象的解构 
      if(errno === 0) {
        return data
      }
    }).catch((err) => {
      console.log(err);
    })
  }
}