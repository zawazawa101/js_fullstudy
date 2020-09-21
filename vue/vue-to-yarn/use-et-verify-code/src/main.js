import Vue from 'vue'
import App from './App.vue'
import EtVerityCode from 'wn-verify-code'
Vue.config.productionTip = false

Vue.use(EtVerityCode)

new Vue({
  render: h => h(App),
}).$mount('#app')
