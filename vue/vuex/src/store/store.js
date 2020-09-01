import Vue from 'vue'
import Vuex from 'vuex'

//1.  安装插件
Vue.use(Vuex)

//2. 创建对象
const store = new Vuex.Store({
  state: {
    count: 10
  }
})

//3. 导出 store
export default store 

//4. 去main.js里面挂载store