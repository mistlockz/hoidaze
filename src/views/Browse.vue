<template>
  <div class="browse">
    <BrowseHeader
    @input="searchSuggestion"
    />
    <ModalSearch
      v-if="showSuggestion"

    />
    <ModalFilter
      @closeModal="toggleFilter"
      v-if="showFilter"
    />
    <BrowseFilter
      v-bind:mapMode="mapMode"
      @toggle="toggleMapmode"
      @filter="toggleFilter"
    />
    
    <BrowseMap
    v-if="mapMode"
    v-bind:accomodations="rawAccomodation"
    />
    
    <BrowseFeed
    v-else
    v-bind:accomodations="rawAccomodation"
    />
        
    <FooterContact
      @click="toggleContact"
    />
    <ModalContact
      v-if="showContact"
      @click="toggleContact"
    />
  </div>
</template>

<script>
import FooterContact from '@/components/FooterContact.vue'
import ModalContact from '@/components/ModalContact.vue'
import BrowseHeader from '@/components/BrowseHeader.vue'
import BrowseFilter from '@/components/BrowseFilter.vue'
import ModalFilter from '@/components/ModalFilter.vue'
import ModalSearch from '@/components/ModalSearch.vue'
import BrowseFeed from '@/components/BrowseFeed.vue'
import BrowseMap from '@/components/BrowseMap.vue'



export default {
  name: 'Browse',
  components: {
    FooterContact,
    ModalContact,
    BrowseHeader,
    BrowseFilter,
    BrowseFeed,
    BrowseMap,
    ModalFilter,
    ModalSearch
  },
  created(){
    this.getMode();
    this.getEstablishments();
    //this.getPhp();
  },
  
  data(){
    return{
      mapMode:Boolean,
      showContact:false,
      showSuggestion:false,
      showFilter:false,
      selectedEstablishments: {},
      rawAccomodation: [],
    }
  },
  methods:{
    toggleContact(){          
      this.showContact = !this.showContact;
      this.showFilter= false;
    },
    toggleMapmode(boolean){
      this.mapMode = boolean;
      localStorage.setItem("mapmode", boolean)
    },
    toggleFilter(){
      this.showFilter = !this.showFilter;
      this.showContact = false;
    },
    toggleSuggestion(){
      this.showSuggestion = !this.showSuggestion
    },
    getMode(){
      
      if(localStorage.getItem('mapmode') == 'true'){
        this.mapMode=true;
        
      }else{
        this.mapMode=false;
      }
      
    },
    searchSuggestion(input){
      if(input == ""){
        this.showSuggestion=false;        
      }
      else{
        this.showSuggestion = true;
      }
    },
    getEstablishments(){
      const corsfix = 'https://cors-anywhere.herokuapp.com/';
      const app = this;
      fetch( corsfix + 'http://www.wallemdesign.com/server/establishments.json')
      .then(function(response) {        
        return response.json();
      })
      .then(function(myJson) {
        app.rawAccomodation = myJson;
        app.rawAccomodation.forEach(app.fixCoordinates)
        
      });
    },
    getPhp(){
      const corsfix = 'https://cors-anywhere.herokuapp.com/'
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
      };
      xhttp.open("GET", corsfix + "http://www.wallemdesign.com/test.php", true);
      xhttp.send();
    },
    fixCoordinates(obj){
      console.log(obj.googleLat)
      obj.googleLat = parseFloat(obj.googleLat)
      obj.googleLong = parseFloat(obj.googleLong)
      console.log(obj.googleLat)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';

</style>
