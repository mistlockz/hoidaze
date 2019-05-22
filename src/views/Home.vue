<template>
  <div class="index">
    <div class="index__bg">
    <div class="index__card">
      <h1>Holidaze</h1>
    </div>
    </div>
  <div class="contact">
    <button>Contact us</button>
    <p>WallemDesign</p>
    
  </div>
       
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.index{  
  background: url('../assets/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;  
  height:110vh;
  width:100%;
}
.index__bg{
  height: 100vh;
}
.contact{
  height:10vh;
  background-color: $orange;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @extend .tab  
}

</style>
