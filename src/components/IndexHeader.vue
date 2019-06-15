<template>
  <div class="[ indexHeader ]">

    <div class="[ indexHeader__wrapper ]">
      <img src="@/assets/logoedit.svg" class="[ logo ]" alt="image of logo">    
      <h1> Holidaze </h1>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'IndexHeader'  
  }
</script>


<style scoped lang="scss">
  @import '@/styles/main.scss';
  .indexHeader{
    background-color: $red;  
    color: white;  
    &__wrapper{
      height: 10vh;
      display: flex;
      align-items: center;
      max-width: 900px;
      margin:0 auto;
    }
    & img{
      height: 80%;
    }
  }
  
</style>
