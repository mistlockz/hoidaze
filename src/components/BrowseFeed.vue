<template>
  <div class="browseFeed">
    <div class="browseFeed__wrapper">
      <BrowseCard/>
      
    </div>
  </div>
</template>

<script>
import BrowseCard from '@/components/BrowseCard.vue'
export default {
  name: 'browseFeed',
  components:{
    BrowseCard,
  },
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
    min-height:70vh;
    padding-top: 2vh;    
  }
}

</style>
