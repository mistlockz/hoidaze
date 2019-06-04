<template>
  <div class="modalContact">
    <div class="modalContact__wrapper">
      <div class="modalContact__top">
        <h3>Contact us</h3>
        <button @click="emitClose">X</button>
      </div>
      <form @submit.prevent="submitContact">
      <span>Name</span>
      <input name="name">
      <span>E-mail</span>
      <input name="name">
      <span>Your Message</span>
      <textarea name="name"></textarea>
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
    max-height: 30vh;
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
    @extend .fontsize-s;
    &:hover{
      background-color: $green;
    }
  }

}

@keyframes slide {
  from {height: 0vh;}
  to {height: 70vh;}
}

</style>
