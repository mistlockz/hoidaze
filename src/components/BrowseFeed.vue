<template>
  <div class="browseFeed">
    <div class="browseFeed__wrapper">
      <BrowseCard
      v-for="place in accomodations"
      v-bind:key="place.id"
      v-bind:place="place"
      
      />
      <h2 v-if="!filterMatch">No Results</h2>
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
    accomodations: Array,
    filterMatch: Boolean,
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
