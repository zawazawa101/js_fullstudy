<template>
  <div class="sidebar" :class="{showSidebar: showSidebar}">
    <div class="sidebar-con" :class="{showbar: showSidebar}">
      <div class="head">
        <div class="avatar">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3947572783,1476163811&fm=26&gp=0.jpg" alt="">
        </div>
        <div class="name">wn</div>
      </div>
      <div class="menu">
        <ul>
          <li @click="showToast">
            <router-link to="">
              <i class="iconfont icon-yonghu"></i>
              <span>个人中心</span>
            </router-link>
          </li>
          <li>{{showSidebar}}</li>
        </ul>
      </div>
    </div>
    <div v-show="showSidebar" @click="setShowSidebar(false)" class="sidebar_mask">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['setShowSidebar']),
    showToast() {
      this.$toast('该功能暂未开放')      
    }
  },
  computed: {
    ...mapGetters(['showSidebar'])
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function.styl"
.sidebar 
  color #e8e8e8
  .sidebar-con 
    background #040308
    position absolute
    top 0
    left px2rem(-400px)
    transform translateZ(0)
    opacity 0
    width px2rem(350px)
    z-index 1002
    height 100%
    overflow auto
    transition all 0.3s ease
    &.showbar 
      transform translateX(px2rem(400px))
      opacity 1
    .head 
      text-align center
      .avatar 
        width px2rem(90px)
        height px2rem(90px)
        background #f1f1f1
        border-radius 50%
        margin px2rem(60px) auto px2rem(15px)
        img 
          width 100%
      .name 
        font-size px2rem(32px)
    .menu 
      margin-top px2rem(30px)
      ul 
        li 
          height px2rem(90px)
          line-height px2rem(90px)
          a 
            display block
            padding-left px2rem(60px)
            .icon 
              font-size px2rem(36px)
              vertical-align middle
            span 
              vertical-align middle
              font-size px2rem(24px)
              padding-left px2rem(20px)
              color #fff
          &hover 
            .icon,
            span 
              color #902444
  .sidebar_mask 
    position fixed
    width 100%
    margin 0 auto
    top 0
    left 0
    bottom 0
    right 0
    z-index 1001
    background rgba(0, 0, 0, 0.4)
</style>
