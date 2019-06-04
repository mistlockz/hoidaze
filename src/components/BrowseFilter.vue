<template>
  <div class="browseFilter">
    <div class="browseFilter__wrapper">
      <div class="browseFilter__tabContainer">
        <button v-bind:class="{active: !mapMode}" @click="emitMapmode(false)">Browse</button>
        <button v-bind:class="{active: mapMode}" @click="emitMapmode(true)">Map</button>
      </div>
      <button @click="emitFilter">Filter</button>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrowseFilter',
  props: ['mapMode'],
  methods:{
    emitMapmode(boolean){
      
      this.$emit('toggle', boolean)
    },
    emitFilter(){
      this.$emit('filter')
    }
  }
}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';
.browseFilter{
  background-color: $orange;
  
  &__wrapper{
    height:8vh;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__tabContainer{
    display: flex;
    height:100%;
    align-items: flex-end;
    margin-right: 20px;
    & button{
      margin-bottom: 0;
      @extend .tab;
    }
  }
}
button{
  margin:10px;
}
.active{
  background-color: $grey;
  color:$black;
}
</style>
