<template>
  <div class="modalFilter">
    <div class="modalFilter__wrapper">
      <div class="modalFilter__top">
        <h2>Filter</h2>
        <button @click="emitClose">X</button>        
      </div>

      <form @submit.prevent="showResults">
          <span>Guests: <strong>{{}}</strong></span>
          <input type="range" name="guests" min="1" max="25" class="slider" >
          <span>Max Price: <strong>{{}}</strong></span>
          <input type="range" name="maxprice" min="1" max="400" class="slider">
          <div class="cateringContainer">
            <span>Self Catering:</span>
            <input type="checkbox" name="" class="checkbox">
          </div>
          <h2>Sort by:</h2>
          <span>Price Low - high:</span>
          <input type="radio" name="sort" class="radio">
          <span>Price high - low:</span>
          <input type="radio" name="sort" class="radio">
          <button>Show Results</button>          
      </form>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'new',
  props: {
    
  },
  methods:{
    emitClose(){
      this.$emit('closeModal')
    },
    showResults(){
      console.log('results')
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
}
form{
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;
  & button{
    width:40%;
    margin: 0 auto;
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
    margin-bottom: 10px;
  }
  & .checkbox{
    height: 20px;
    width: 20px;
    margin-left: 10px;
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
