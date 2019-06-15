<template>
  <div class="[ orders ]">

    <AdminHeader @click="logout"/>

    <AdminNav/>

    <AdminOrder
      v-for="order in orders.slice().reverse()"
      v-bind:key="order.id"
      v-bind:order="order"
    />

  </div>
</template>

<script>
  import AdminHeader from '@/components/AdminHeader.vue'
  import AdminNav from '@/components/AdminNav.vue'
  import AdminOrder from '@/components/AdminOrder.vue'

  export default {
    name: 'AdminOrders',

    components: {
      AdminHeader,
      AdminNav,
      AdminOrder
    },

    data(){
      return{
        orders:[]
      }
    },

    created(){
      this.checkSession();
      this.getOrders();
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

      getOrders(){
        const corsfix = 'https://cors-anywhere.herokuapp.com/';
        const app = this;
        fetch( corsfix + 'http://www.wallemdesign.com/server/enquiries.json')
        .then(function(response) {        
          return response.json();
        })
        .then(function(myJson) {          
          app.orders = myJson;        
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/main.scss';
  .orders{
    background-color: $grey;
    height: 100%;
  }
</style>
