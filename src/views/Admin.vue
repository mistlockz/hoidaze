<template>
  <div class="[ admin ]">

    <IndexHeader/>

    <div class="[ admin__body ]">
      <div class="[ admin__wrapper ]">        
        <form @submit.prevent>
          <h2> Administrator Login </h2>
          <span> Username: </span>
          <input name="username" type="text" v-model="username" @keydown="resetError">
          <span> Password: </span>
          <input name="password" type="password" v-model="password" @keydown="resetError">
          <span class="[ errorMsg ]" v-if="loginError"> Invalid login-information </span>
          <button type="submit" @click="login"> Login </button>
        </form>
      </div>
    </div> 

  </div>
</template>

<script>
  import IndexHeader from '@/components/IndexHeader.vue';
  export default {
    name: 'Admin',

    components: {
      IndexHeader
    },

    data(){
      return {
        username:"",
        password:"",
        loginError:false,
      }
    },

    created(){
      localStorage.setItem('username','morten');
      localStorage.setItem('password','1234');
    },

    methods:{
      login(){
        if(localStorage.getItem('username')== this.username && localStorage.getItem('password')== this.password){
          var sessionId = this.generateSession();        
          sessionStorage.setItem('sessionId',sessionId)
          this.$router.push('/admin/messages')
        }else{
          this.username=""
          this.password=""
          this.loginError=true;
        }
      },

      resetError(){
        this.loginError=false;
      },

      generateSession(){
        return Math.floor((Math.random() * 10000) + 1);
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
    & .errorMsg{
      color:$ui-red;
      @extend .fontweight-m;
      @extend .fontsize-m;
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
