<template>
  <div class="indexHero">
    <div class="indexHero__panel">
      <h2>The easy way of finding accommodation in Bergen</h2>
      <nav class="indexHero__nav">       
        <button @click="emitSearch" class="search">Search</button>
        <button @click="emitMap" class="map">Browse Map</button>
      </nav>      
    </div>    
  </div>
</template>

<script>
export default {
  name: 'IndexHero',
  props: {
    
  },
  methods:{
    emitSearch(){
      localStorage.setItem('mapmode', false);
      this.$emit('click')
    },
    emitMap(){
      localStorage.setItem('mapmode', true);
      this.$emit('click')
    }
  }
}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';
h2{
  text-align: center;
}
.indexHero{
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  height: 80%;
  &__panel{
    background-color: $red;
    padding:20px;
    border-radius: 5px;
    color:white;
  }
  &__nav{
    display: flex;
    justify-content: space-between;
  }
  
  &__navButton{
    display: flex;
    justify-content: center;
    align-content: center;
    border: solid white 1px;
  }
  button{
    background-color: $ui-blue;
    flex:1;
    margin:20px;
    background-size: 40px;
    background-position-x: left;
    background-position-y: center;   
    background-repeat: no-repeat;
    padding-left:50px;
    padding:20px;
    @extend .fontsize-s;
    &:hover{
      background-color: $ui-yellow;
      background-size: 45px;
    }
    

    &.search{
      background-image: url('../assets/icons/search.svg');
    }
    &.map{
      background-image: url('../assets/icons/map-marker.svg');
    }    
  }
  @media only screen and (max-width: 600px) {
    .indexHero__nav{
      flex-direction: column;
    }
  }
}

</style>
