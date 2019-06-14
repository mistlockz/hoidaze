<template>
  <div class="modalFilter">
    <div class="modalFilter__wrapper">
      <div class="modalFilter__top">
        <h2>Filter</h2>
        <button @click="emitClose">X</button>        
      </div>

      <form @submit.prevent="">
          <span>Minimum Guests: <strong>{{filter.guests}}</strong></span>
          <input type="range" name="guests" min="1" max="25" class="slider" v-model="filter.guests" >
          <span>Maximum Price: <strong>{{filter.price}}$</strong></span>
          <input type="range" name="maxprice" min="1"   max="400" class="slider" v-model="filter.price">
          
          <span>Self Catering:</span>
          <div class="cateringContainer">
            <label>Unset</label>
            <input type="radio" name="catering" value="null"  class="radio" v-model="filter.catering">
            <label>No</label>
            <input type="radio" name="catering" value="false"  class="radio" v-model="filter.catering">
            <label for="Tree">Yes</label>
            <input type="radio" name="catering" value="true"  class="radio" v-model="filter.catering">
          </div>          
          <button @click="emitFilter">Show Results</button>        
      </form>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'new',
  props: {
    
  }, 
  data(){
    return{
      filter:{
        guests:1,
        price: 400,
        catering:"null"
      }      
    }
  },
  methods:{
    emitClose(){
      this.$emit('closeModal')
    },
    emitFilter(){ 
        
      this.$emit('emitFilter', this.filter)
    }
  }
}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';

.modalFilter{
  position: fixed;  
  z-index: 20;
  width:100%;
  &__wrapper{
    max-width: 950px;
    margin:0 auto;
    min-height: 20vh;
    background-color: $orange;
  }
  &__top{
    @extend .flex__between--center;
    padding:20px;
    padding-left: 10%;
    color: white;
    & button{
      background-color: $ui-red;
      &:hover{
        background-color: $ui-yellow;
      }
    }
  }
.cateringContainer{
  display: flex;
  align-items: center;
  padding:10px;
}
form{
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;
  & button{
    width:40%;
    margin: 0 auto;
    margin-top:20px;
    margin-bottom: 20px;
  }
  & span{
    font-size: 16pt;
    margin-bottom: 10px;
  }
  & h2{
    margin-top:30px;
    margin-bottom: 15px;
  }
  & .radio{
    height: 20px;
    width: 20px;
    margin: 10px;
  }
  & .checkbox{
    height: 20px;
    width: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
  & .slider{
     -webkit-appearance: none;
    outline: none;
    height:20px;
    border-radius: 5px;
    margin-bottom: 20px;
    &::-webkit-slider-thumb{
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%; 
      background: $ui-blue;
      cursor: pointer;
    }
  }
}
}

</style>
