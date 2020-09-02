<template>
  <div id="app">
    <!-- header 组件 -->
    <v-header :shopInfo="seller"></v-header>
    <router-view/>
  </div>
</template>
<script>
import VHeader from '@/components/v-header/v-header.vue';
import { getSeller } from '@/api';
import qs from 'query-string'

export default {
  data() {
    return {
      seller: {
        id: qs.parse(location.search).id
      },
    }
  },
  created() {
    this._getseller() 
  },
  methods: {
    _getseller() {
      getSeller({
        id: this.seller.id
      }).then((seller) => {
       this.seller = Object.assign(this.seller,seller)
      })
    }
  },
  components: {
    VHeader,
  },
};
</script>
<style lang="stylus" scoped>

</style>
