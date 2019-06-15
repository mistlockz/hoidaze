<template>
  <div class="[ adminHeader ]">
    <div class="[ adminHeader__wrapper ]">
      <img src="@/assets/logoedit.svg" class="[ logo ]" alt="image of logo">    
      <h2> Welcome {{user}} </h2>
    </div>  
    <button @click="emitLogout"> Log out </button>      
  </div>
</template>

<script>
export default {
  name: 'AdminHeader',
  data(){
    return{
      user:String
    }
  },
  created(){
    this.user = localStorage.getItem('username')
  },
  methods:{
    emitLogout(){
      this.$emit('click')
    }
  }
}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';
.adminHeader{
  background-color: $red;  
  color: white;  
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__wrapper{
    height: 10vh;
    display: flex;
    align-items: center;
    max-width: 900px;
  }
  & button{
    margin-right:15px;
  }
}
img{
  height: 80%;  
}
</style>
