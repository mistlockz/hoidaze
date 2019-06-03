<template>
  <div class="browseMap">
    <div class="browseMap__wrapper">
      <gmap-map
      :center="center"
      :zoom="11"
      style="width:100%;  height: 40vh;"
      ><gmap-marker
        :icon="{
          url:'http://www.wallemdesign.com/map-marker.svg',
          size: {width: 46, height: 46, f: 'px', b: 'px'}, 
          scaledSize: {width: 40, height: 40, f: 'px', b: 'px'}
        }"
        :position="{lat:60.393388, lng:5.228720 }"
        
        
        
        
      ></gmap-marker>
      </gmap-map>
    
    </div>
  </div>
</template>

<script>

export default {
  name: 'browseMap',
  props: {
    
  },
  data(){
    return {
      center: {lat:60.3917426, lng: 5.3274496},
      
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
