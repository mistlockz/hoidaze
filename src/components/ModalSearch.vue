<template>
  <div class="modalSearch">
    <div class="modalSearch__wrapper">
      <h2>Suggestions:</h2>
      <div class="suggestion" v-for="item in items">
        <p>Bergen</p>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalSearch',
  props: {
    
  },
  data(){
    return{
      items: 4,
    }
  }
}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';
.modalSearch{
  position: fixed;  
  z-index: 40;
  width:100%;
  &__wrapper{
    max-width:910px;
    margin: 0 auto;
    background-color: $red;
    color:white;
    padding-bottom: 10px;
    & h2{
      margin-left: 15px;
      padding-bottom: 20px;
      border-bottom: 1px solid white;
    }
    & .suggestion{
      margin: 0 auto;
      width: 90%;      
      border-bottom: 1px solid white;
      padding:20px;
      @extend .fontsize-m;
    }
  }
}

</style>
