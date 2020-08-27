<template>
  <div class="detail">
    <h1>Computed 计算属性</h1>
     <div class="price">
       {{totalPrice}}元
     </div>
     <div class="news">
       <ul>
         <li v-for="(item, index) in reverseNews" :key="index">
           {{item.title}}--{{item.date}}
         </li>
          <!-- <li v-for="(item, index) in news" :key="index">
           {{item.title}}--{{item.date}}
         </li> -->
       </ul>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 100,
      num: 7,
      news: [
        { 
          title: '#袁隆平爷爷90岁生日前去理发#',
          date: '2020/8/23'
        },
         { 
          title: '#长安十二时辰要拍动画剧#',
          date: '2020/8/24'
        },
         { 
          title: '#微信回应山寨招生公众号#',
          date: '2020/8/26'
        },
         { 
          title: '#张雨绮力挺鹿晗公开恋情#',
          date: '2020/8/27'
        }
      ]
    }
  },
  computed: {
    totalPrice: function() {
      return this.price * this.num
    },
    reverseNews: function() {
      let news = this.news
      return news.reverse()
    }
  }
}
</script>

<style>

</style>