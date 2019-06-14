<template>
  <div class="modalSearch">
    <div class="modalSearch__wrapper">
      <h2>Suggestions:</h2>
      <router-link :to="{name:'accomodation', params: {id: item.id}}" v-for="item in items" v-bind:key="item.id">
        <div class="suggestion">
        <p class="">{{item.establishmentName}}</p>
        </div>
      </router-link>
      <div class="suggestion" v-if="!nomatch">
        <p>No Results for: {{input}}</p>
      </div>   
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalSearch',
  props: {
    items: Array,
    input: String,
    nomatch:Boolean,

  },
  data(){
    return{
      
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
    & a{
      color:white;
      :hover{
        color:$ui-yellow;
      }
    }

    & h2{
      margin-left: 15px;
      padding-bottom: 20px;
      border-bottom: 1px solid white;
    }
    & .suggestion{
      margin: 0 auto;
      color:white;

      width: 90%;      
      border-bottom: 1px solid white;
      padding:20px;
      @extend .fontsize-m;
      
    }
  }
}


</style>
