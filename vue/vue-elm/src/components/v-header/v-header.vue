<template>
  <div class="header">
    <div class="content-wrapper" @click="handleDetail" >
      <div class="avatar">
        <img width="64" height="64" :src="shopInfos.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{shopInfos.name}}</span>
        </div>
        <div class="description">
          {{shopInfos.description}}/{{shopInfos.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="shopInfos.supports">
          <support-ico :size=1 :type="shopInfos.supports[0].type"></support-ico>
          <span class="text">{{shopInfos.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="shopInfos.supports">
        <span class="count">{{shopInfos.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{shopInfos.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="shopInfo.avatar" alt="" width="100%" height="100%">
    </div>
    <!-- detail -->
    <header-detail :shopInfo="shopInfos" v-show="isShow" @hides="hidden"></header-detail>
  </div>
</template>

<script>
import SupportIco from '@/components/support-ico/support-ico'
import HeaderDetail from '@/components/header-detail/header-detail'
export default {
  props: {
    shopInfo: {
      type: Object,
      
    }
  },
  data() {
    return {
      shopInfos: {},
      isShow: false
    }
  },
  methods: {
    handleDetail() {
      this.isShow = true
    },
    hidden(e) {
      this.isShow = e
    }
  },
  components: {
    SupportIco,
    HeaderDetail
  },
  created() {
    setTimeout(() => {
      this.shopInfos = this.shopInfo
      console.log(this.shopInfos)
    }, 1000)
  }
  // watch:{
  //   shopInfo(val){
  //     this.info = val;
  //     console.log(val)
  //   }
  // }
  
};
</script>

<style lang="stylus">
@import "../../common/stylus/variable.styl";
@import "../../common/stylus/mixin.styl";

.header
  position relative
  overflow hidden
  color $color-white
  background $color-background-ss
  .content-wrapper
    position relative
    display flex
    align-items center
    padding 24px 12px 18px 24px
    .avatar
      flex 0 0 64px
      width 64px
      margin-right 16px
      img
        border-radius 2px
    .content
      flex 1
      .title
        display flex
        align-items center
        margin-bottom 8px
        .brand
          width 30px
          height 18px
          bg-image('./brand')
          background-size 30px 18px
          background-repeat no-repeat
        .name
          margin-left 6px
          font-size $fontsize-large
          font-weight bold
      .description
        margin-bottom 8px
        line-height 12px
        font-size $fontsize-small
      .support
        display flex
        align-items center
        &-ico
          margin-right 4px
        .text
          line-height 12px
          font-size $fontsize-small-s
    .support-count
      position absolute
      right 12px
      bottom 14px
      display flex
      align-items center
      padding 0 8px
      height 24px
      line-height 24px
      text-align center
      border-radius 14px
      background $color-background-sss
      .count
        font-size $fontsize-small-s
        margin-right 2px
      .icon-keyboard_arrow_right
        font-size $fontsize-small-s
  .background
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index -1
    filter blur(10px)
  .bulletin-wrapper
    position relative
    display flex
    align-items center
    height 28px
    line-height 28px
    padding 0 8px
    background $color-background-sss
    .bulletin-title
      flex 0 0 22px
      width 22px
      height 12px
      margin-right 4px
      bg-image('bulletin')
      background-size 22px 12px
      background-repeat no-repeat
    .bulletin-text
      flex 1
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      font-size $fontsize-small-s 
    .icon-keyboard_arrow_right
      flex 0 0 10px
      width 10px
      font-size $fontsize-small-s 
</style>
