<template>
  <div class="home-child">
    <p>首页的子组件</p>
    <hr/>
    <h3>{{sdd}}</h3>
    <h3>{{count}}</h3>
    <button @click="addAction">+</button>
    <button @click="reduce">-</button>
  </div>

</template>

<script>
import store from "@/vuex/store.js"
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      msg: 'Hello World',
      num: 1
    }
  },
  store,
  // methods: {
  //   add() {
  //     this.$store.commit('add', 10)
  //   },
  //   reduce() {
  //     this.$store.commit('reduce')
  //   }
  // },
  // methods: mapMutations([
  //   'add', 'reduce'
  // ]),
  methods: {
    ...mapMutations(['add', 'reduce']),// 通常项目开发所使用的方法
    ...mapActions(['addAction'])
  },
  // computed: mapState({
  //   count: state => state.count
  // })
  // computed: mapState(['count']),
  computed: {
    ...mapState(['count']),
    ...mapGetters(['sdd']),
  }

}
</script>

<style>

</style>
