<template>
  <div class="footerContact">
    <div class="footerContact__wrapper">
      <button @click="emitClick">Contact Us!</button>
      <span>Wallem Design</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'FooterContact',
  props: {
    
  },
  methods:{
    emitClick(){
      this.$emit('click');
    }
  }
}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';
.footerContact{
  background-color: $orange;
  
  padding: 0px 20px 0px 20px;
  &__wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  max-width: 900px;
  margin: 0 auto;
  }
}
span{
  color: white;
}
</style>
