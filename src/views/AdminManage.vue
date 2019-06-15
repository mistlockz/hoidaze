<template>
  <div class="[ manage ]">

    <AdminHeader @click="logout" />

    <AdminNav/>

    <div class="[ manage__button ]">
      <button @click="toggleAccomodationModal"> Add New Accomodation </button>
    </div>

    <div class="[ manage__wrapper ]">
      <AdminAccomodation
        v-for="place in establishments"
        v-bind:key="place.id"
        v-bind:place="place"
      />
    </div>

    <ModalAccomodation
      @click="toggleAccomodationModal"
      v-if="showAccomodation"
      v-bind:totalEst="totEstablishments"
    />
    
  </div>
</template>

<script>
  import AdminHeader from '@/components/AdminHeader.vue'
  import AdminNav from '@/components/AdminNav.vue'
  import AdminAccomodation from '@/components/AdminAccomodation.vue'
  import ModalAccomodation from '@/components/ModalAccomodation.vue'

  export default {
    name: 'AdminMangage',
    components: {
      AdminHeader,
      AdminNav,
      AdminAccomodation,
      ModalAccomodation
    },
    data(){
      return{
        showAccomodation: false,
        establishments: Array,
        totEstablishments:Number,
      }
    },
    created(){
      this.checkSession();
      this.getEstablishments();
      
    },
    methods:{
      toggleAccomodationModal(){
        this.showAccomodation = !this.showAccomodation;
      },
      checkSession(){
        if(sessionStorage.getItem('sessionId')== null){
          this.$router.push('/admin');
        }
      },
      logout(){
        sessionStorage.removeItem('sessionId');
        this.checkSession();
      },
      getEstablishments(){
        const corsfix = 'https://cors-anywhere.herokuapp.com/';
        const app = this;
        fetch( corsfix + 'http://www.wallemdesign.com/server/establishments.json')
        .then(function(response) {        
          return response.json();
        })
        .then(function(myJson) {
          
          app.establishments = myJson;
          app.totEstablishments = myJson.length;    
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/main.scss';
  .manage{
    background-color: $grey;
    min-height: 100vh;
    &__button{
      @extend .flex__center--center;
    }
    &__wrapper{
      max-width: 900px;
      margin: 0 auto;
    }
  }
  button{
    margin:20px;
    padding:16px;
    @extend .fontsize-m;
  }
</style>
