<template>
  <div class="admin">
    <IndexCard/>
    <div class="admin__body">
      <div class="admin__wrapper">        
        <form @submit.prevent>
          <h2>Administrator Login</h2>
          <span>Username</span>
          <input type="text">
          <span>Password:</span>
          <input type="password">
          <button type="submit" @click="login">Login</button>
        </form>
      </div>
    </div>
      
  </div>
</template>

<script>

import IndexCard from '@/components/IndexCard.vue';
export default {
  name: 'Admin',
  components: {
    IndexCard
  },
  methods:{
    login(username, password){

    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.admin{
  height: 100vh;
  width: 100%;
  background: url('../assets/bg.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  & h2{
    text-align: center;
    padding: 10px;
  }
  &__wrapper{
    width:100%;
    max-width: 600px;
    margin: 0 auto;
    background-color: $orange;
    border-radius: 10px;
  }
  &__body{
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
form{
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  background-color: transparent;
  padding-bottom: 20px;

  & span{
    margin: 5px 0px 5px 0px;
  }
  & input{
    @extend .fontsize-m;
    border:none;
    border-radius: 5px;
    margin: 5px 0px 5px 0px;
  }
  & button{
    margin-top: 10px;
    background-color: $ui-green;
  }
}
</style>
