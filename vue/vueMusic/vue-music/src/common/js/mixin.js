export const searchMixin = {
  data() {
    return{
      query: ''
    }
  },
  computed: {

  },
  methods: {
    onQueryChange(e) {
      console.log(e)
      this.query = e.trim()
      // 发起接口请求
    }
  }
}