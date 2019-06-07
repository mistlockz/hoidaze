<template>
  <div class="accomodation">    
    <div class="accomodation__header">
      <h2>Accomodation name</h2>
    </div>
    <div class="accomodation__img">
       
    </div>
    <div class="accomodation__text">
       <p>API INFO IN HERE YO!</p>
    </div>
    <div class="accomodation__table">
      <table>
      <tr>
        <td class="table__key">Price:</td>
        <td class="table__value" ><strong>{{}}</strong></td>
      </tr>
      <tr>
        <td class="table__key">Max guests:</td>
        <td class="table__value"><strong>{{}}</strong></td>
      </tr>
      <tr>
        <td class="table__key">Self Catering:</td>
        <td class="table__value"><strong>{{}}</strong></td>
      </tr>
      <tr>
        <td class="table__key">Email:</td>
        <td class="table__value"><strong>{{}}</strong></td>
      </tr>
    </table>
    <div class="accomodation__button">
        <button @click="toggleBooking">Book Now</button>
    </div>
    
    </div>

    
    <FooterContact
      @click="toggleContact"
    />
    <ModalBooking
    @click="toggleBooking"
    v-if="showBooking"
    />
    <ModalContact
      v-if="showContact"
      @click="toggleContact"
    />
  </div>
</template>

<script>
import BrowseMap from '@/components/BrowseMap.vue'
import FooterContact from '@/components/FooterContact.vue'
import ModalContact from '@/components/ModalContact.vue'
import ModalBooking from '@/components/ModalBooking.vue'
// New IMg https://images.unsplash.com/photo-1501117716987-c8c394bb29df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80
// long img https://images.unsplash.com/photo-1548873902-8b69fb85030a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80

export default {
  name: 'new',
  components: {
    BrowseMap,
    FooterContact,
    ModalContact,
    ModalBooking
  },
  data(){
    return{      
      showContact: false,
      showBooking: false,     
    }
  },
  methods:{
    toggleContact(){          
      this.showContact = !this.showContact;
      this.showBooking= false;
    },
    toggleBooking(){
      this.showBooking = !this.showBooking;
      this.showContact = false;
    }

  }}
</script>





<style lang="scss" scoped>
@import '@/styles/main.scss';
tr{
  @extend .flex;
}
.table__key{
  flex:1;
}
.table__value{
  flex:2;
  border-left: solid white 2px;
}
.accomodation{
  &__header{
    @extend .flex__center--center;
    @extend .fontsize-m;
    padding:5px;
    min-height: 10vh;
    background-color: $red;
    color:white;
  }
  &__img{
    height:40vh;
    width:100%;
    max-width: 900px;
    margin:0 auto;
    background-image: url('https://images.unsplash.com/photo-1501117716987-c8c394bb29df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: $grey-dark;
  }
  &__text{
    max-width: 900px;
    margin:0 auto;
    padding:40px;
    & p{
      margin-left: 10px;
      @extend .fontsize-m;
    }
  }
  &__table{
    
    max-width: 900px;
    margin:0 auto;
    & table{
      width: 100%;
      background-color: $grey;
      border-radius: 10px;
      padding:10px;
      & td{
       padding:10px;
       border-bottom: solid white 2px;
       @extend .fontsize-s;
      }
    }
  }
  &__button{
    @extend .flex__center;
    margin-top:20px;
    margin-bottom: 20px;
    & button{
      width:80%;
      @extend .fontsize-m;
    }
  }

  
}
</style>
