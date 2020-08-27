<template>
  <div class="home">
    <User :userName = "name" @titleChange="updataTitle"></User>
    <div>{{title}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import User from '@/components/user.vue'

export default {
  name: 'Home',
  data() {
    return {
      name:'didi',
      title: ''
    }
  },
  components: {
    User
  },
  methods:{
    updataTitle(title){
     this.title = title
    }
  }
}
</script>
