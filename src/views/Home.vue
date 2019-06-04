<template>
  <div class="index">
    
    <IndexCard/>

    <IndexHero
      @click="navigateBrowse"
    />
    <FooterContact
      @click="toggleContact"
    />
    
    <ModalContact
      @click="toggleContact"
      v-if="showContact"
    />
    
    
  </div>
</template>

<script>
import IndexCard from '@/components/IndexCard.vue';
import IndexHero from '@/components/IndexHero.vue';
import FooterContact from '@/components/FooterContact.vue';
import ModalContact from '@/components/ModalContact.vue';


export default {
  name: 'home',
  components: {
    IndexCard,
    FooterContact,
    IndexHero,
    ModalContact
  },
  data(){
    return{
      showContact: false,    
    }
  },
  methods:{
    toggleContact(){          
      this.showContact = !this.showContact;
    },
    navigateBrowse(){      
      this.$router.push('browse')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.index{
  height: 100vh;
  width: 100%;
  background: url('../assets/bg.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
