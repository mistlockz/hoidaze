<template>
  <div class="messages">
    <AdminHeader @click="logout"/>
    <AdminNav/>
    <AdminMessage
      v-for="message in messages"
      v-bind:key="message.id"
      v-bind:message="message"
    />
  </div>
</template>

<script>
import AdminHeader from '@/components/AdminHeader.vue'
import AdminNav from '@/components/AdminNav.vue'
import AdminMessage from '@/components/AdminMessage.vue'

export default {
  name: 'AdminMessages',
  components: {
    AdminHeader,
    AdminNav,
    AdminMessage
  },
  data(){
    return{
      messages:[],
    }
  },
  created(){
    this.checkSession();
    this.getMessages();
  },
  methods:{    
    checkSession(){
      if(sessionStorage.getItem('sessionId')== null){
        this.$router.push('/admin');
      }
    },
    logout(){
      sessionStorage.removeItem('sessionId');
      this.checkSession();
    },
    getMessages(){
      const corsfix = 'https://cors-anywhere.herokuapp.com/';
      const app = this;
      fetch( corsfix + 'http://www.wallemdesign.com/server/contact.json')
      .then(function(response) {        
        return response.json();
      })
      .then(function(myJson) {
        console.table(myJson)
        app.messages = myJson;        
      });
    },
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.messages{
  background-color: $grey;
  height: 100vh;
}
</style>
