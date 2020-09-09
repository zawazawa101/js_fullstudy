<template>
  <div id="app">
    <v-header> 
      <i class="iconfont icon-toggle-copy" slot="left-icon"></i>
      <span slot="content">我的音乐</span>
      <i class="iconfont icon-yonghu" slot="right-icon"></i>
    </v-header>

    <v-tab></v-tab>

    <keep-alive>
       <router-view/>
    </keep-alive>
   

    <v-sidebar></v-sidebar>
    <!-- meun -->
    
  </div>
</template>
<script>
import header from '@/components/header.vue'
import sideBar from '@/components/sideBar.vue'
import tab from '@/components/tab.vue'
export default {
  components:{
    'v-header': header,
    'v-sidebar': sideBar,
    'v-tab': tab
  }
}
</script>
<style lang="stylus">
html,
body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(8, 5, 58, 0.9);
  color: #fff;
}
</style>
