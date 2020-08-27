<template>
  <div class="about">
     <User :userName="name" @animalNameChange="getName"></User>
     <Animal :animalName="animalName"></Animal>
  </div>
</template>

<script>
  import User from '@/components/user'
  import Animal from '@/components/animal'
  export default{
    data() {
      return {
        name: 'Keyng',
        animalName:'小白'
      }
    },
    components: {
      User,
      Animal
    },
    methods:{
      getName(name) {
        this.animalName = name
        console.log(name)
      }
    }
  }
</script>

<style>
.about{
  color: red
}
</style>