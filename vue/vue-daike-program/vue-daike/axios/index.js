import register from './interface/register'
import apiLogin from './interface/login'

const install = Vue => {
  if(install.installed) {
    return;
  }
  install.installed = true

  Object.defineProperties(Vue.prototype, {
    $http: {
      get () {
        return Object.assign(
          {},
          apiLogin,
          register
        )
      }
    }
  })
}

export default install