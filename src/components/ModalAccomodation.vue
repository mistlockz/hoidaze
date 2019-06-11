<template>
  <div class="modalContact">
    <div class="modalContact__wrapper">
      <div class="modalContact__top">
        <h3>Add Accomodation</h3>
        <button @click="emitClose">X</button>
      </div>
      <form @submit.prevent="submitContact">
      <span>Name</span>
      <input name="name">
      <span>E-mail</span>
      <input name="name">
      <span>Description</span>
      <textarea name="name"></textarea>
      <span>Position (drag the marker to location of the accomodation)</span>
      <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 40vh; margin-bottom:10px;"
      ><gmap-marker
        :icon="{
          url:'http://www.wallemdesign.com/map-marker.svg',
          size: {width: 46, height: 46, f: 'px', b: 'px'}, 
          scaledSize: {width: 40, height: 40, f: 'px', b: 'px'}
        }"
        :position="center" 
        :draggable="true"       
      ></gmap-marker>
      </gmap-map>
      <span>Image url</span>
      <input name="name">
      <span>Maximum Guests</span>
      <input name="name" type="number">
      <span>Price</span>
      <input name="name" type="number">
      <div class="row">
        <span>Self-Catering: </span>
        <input type="checkbox">
      </div>
      
      <button type="submit">Send</button>
    </form>
    </div>
    
      
    
   
  </div>
</template>

<script>
export default {
  name: 'ModalContact',
  props: {
    
  },
  data(){
    return{
      center: {lat:60.3917426, lng: 5.3274496},
    }
  },
  methods:{
    submitContact(){
      alert("submiting")
    },
    emitClose(){      
      this.$emit('click');
    }
  }
}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';
.modalContact{
  position: fixed;  
  width:100%;  
  bottom:0;
  animation-name: slide;
  animation-duration: 0.8s;
  animation-direction: normal;
  animation-fill-mode: forwards;  
  
  &__wrapper{
    max-width:910px;
    margin: 0 auto;
    background-color: $orange;
    height: 100%;
    overflow-y: scroll;
    @extend .tab;
  }
  &__top{
    width:80%;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding-top: 10px;
    color:white;
    & button{
      background-color: $ui-red;
      &:hover{
        background-color: $ui-yellow;
      }
    }    
  }
}
form{
  width:80%;
  max-width: 700px;
  margin:0 auto;
  padding-top:20px;
  display: flex;
  flex-direction: column;
  
  & textarea{
    max-width: 100%;
    min-width: 100%;
    font-size: 16pt;
    min-height: 10vh;
    max-height: 20vh;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  & span{
    margin-bottom: 10px;
  }
  & input{
    border-radius:5px;
    border: none;
    font-size: 16pt;
    margin-bottom: 20px;
  }
  
  & button{
    background-color: $ui-green;
    margin-bottom: 20px;
    @extend .fontsize-s;
    &:hover{
      background-color: $green;
    }
  }
  & .row{
    @extend .flex__left--center;
    margin: 20px 0px 20px 0px;
    & input{
      margin:0;
      margin-left:20px;
      height:20px;
      width: 20px;

    }
    & span{
      margin: 0;
    }
  }

}

@keyframes slide {
  from {height: 0vh;}
  to {height: 100vh;}
}

</style>
