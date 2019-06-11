<template>
  <div class="manage">
    <AdminHeader/>
    <AdminNav/>
    <div class="manage__button">
      <button @click="toggleAccomodationModal">Add New Accomodation</button>
    </div>
    <div class="manage__wrapper">
      <AdminAccomodation/>
      <AdminAccomodation/>
    </div>
    <ModalAccomodation
      @click="toggleAccomodationModal"
      v-if="showAccomodation"
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
    }
  },
  methods:{
    toggleAccomodationModal(){
      this.showAccomodation = !this.showAccomodation;
    }
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
