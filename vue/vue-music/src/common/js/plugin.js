let Toast = {}
Toast.install = function (Vue, options) {
  let opt = {
    defaultType: 'center', // m默认显示位置
    duration: '1500', // 持续的时间
  }

  for (let property in options) {
    opt[property] = options[property] // 使用 options 配置
  }
  let tplShow = false
  Vue.prototype.$toast = (tips, type) => {
    if (type) {
      opt.defaultType = type // 如果传了type，那么就使用该type作为位置来展示 
    }
    let toastTpl = Vue.extend({
      template: '<div class="vue-toast toast-' + opt.defaultType + ' ">' + tips + '</div>'
    })
    let tpl = new toastTpl().$mount().$el
    if (!tplShow) {
      document.body.appendChild(tpl)
        tplShow = true
    } 
    function removeToast() {
      document.body.removeChild(tpl)
      tplShow = false
    }
    debounce(removeToast, opt.duration)()

    function debounce(fuc, delay) {
    let timer = null
    return function () {
      if (timer) {
        console.log('清除了定时器')
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fuc()
        timer = null
      }, delay);
    }
  }
  }

  
  ['bottom', 'center', 'top'].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.prototype.$toast(tips, type)
    }
  })
}

export {
  Toast
}