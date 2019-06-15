<template>
  <div class="[ browseMap ]">

    <div class="[ browseMap__wrapper ]">
      <gmap-map
        :center="center"
        :zoom="11"
        style="width:100%;  height: 40vh;"
      >
        <gmap-marker
          v-for="place in accomodations"
          v-bind:key="place.id"
          :id="place.id"          
          :icon="{
            url:'http://www.wallemdesign.com/map-marker.svg',
            size: {width: 46, height: 46, f: 'px', b: 'px'}, 
            scaledSize: {width: 40, height: 40, f: 'px', b: 'px'},
            id: place.id,
          }"
          :position="{lat:place.googleLat, lng: place.googleLong, }"
          @click="updateCard(place.id)"          
        ></gmap-marker>

      </gmap-map>

      <BrowseCard
        v-bind:place="selectedPlace"
        v-if="showPlace"
      />

    </div>

  </div>
</template>

<script>
  import BrowseCard from '@/components/BrowseCard.vue'
  export default {
    name: 'browseMap',

    components:{
      BrowseCard
    },

    props: {
      accomodations: Array,
    },

    data(){
      return {
        center: {lat:60.3917426, lng: 5.3274496},
        selectedPlace: {},
        showPlace: false,        
      }
    },

    methods:{
      updateCard(id){
        this.showPlace = true;
        this.accomodations.forEach(place => {
          if(place.id == id){
            this.selectedPlace = place;
          }
        });
      }
    }
  }
</script>


<style scoped lang="scss">
  @import '@/styles/main.scss';
  .browseMap{
    background-color: $grey;  
    
    &__wrapper{
      max-width: 900px;
      margin: 0 auto;
      min-height:70vh;
      padding-top:2vh;    
    }
  }

</style>
