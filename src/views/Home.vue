<template>
  <div class="index">
    <div class="index__bg">
      <div class="index__card">
        <div class="flex__center--center">
          <img src="@/assets/logoedit.svg" class="logo">
          <h1>Holidaze</h1>
        </div>
        
        <h2>The easy way of finding accomodation in Bergen</h2>
        <div class="linkButton">
          <a href="" class="ming">
           <img src="@/assets/icons/search.svg" class="icon-s"> 
           Search
            
          </a>
        </div>
        
        
      </div>
      
    </div>
  <div class="contact">
    <button>Contact us</button>
    <p>WallemDesign</p>
    
  </div>
       
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.index{  
  background: url('../assets/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;  
  height:100vh;
  overflow-y: scroll;
  width:100%;
}
.index__bg{
  height: 100vh;
}
.contact{
  height:10vh;
  background-color: $nu-orange;  
  @extend .tab;
  @extend .flex__between--center;
  
}
.contact p{
  align-self: flex-end;
}
.index__card{  
  width:80%;
  margin: 0 auto;
  margin-top: 5vh;
  background-color:$nu-red;
  color:$white;  
  border-radius: 8px;
}
.ming{
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid white 2px;
}
a{
  
 
}
.anchor{
  border:solid white 1px;
  width:90%;
  margin: 0 auto;
  border-radius: 6px;
  padding:10px;

  &:hover :first-child{
    transform: scale(1.2);
  }
}
</style>
