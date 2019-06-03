<template>
  <div class="browseFeed">
    <div class="browseFeed__wrapper">
      <p>feed</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'browseFeed',
  props: {
    
  }
}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';
.browseFeed{
  background-color: $grey;
  
  &__wrapper{
    max-width: 900px;
    margin: 0 auto;
    min-height:72vh;
    
  }
}

</style>
