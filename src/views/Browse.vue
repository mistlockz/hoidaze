<template>
  <div class="browse">
    <BrowseHeader
    @input="searchSuggestion"
    />
    <ModalSearch
      v-if="showSuggestion"
      v-bind:items="searchAccomodations"
      v-bind:input="filters.search"
      v-bind:nomatch="searchMatch"

    />
    <ModalFilter
      @closeModal="toggleFilter"
      v-show="showFilter"
      @emitFilter="setFormFilter"
    />
    <BrowseFilter
      v-bind:mapMode="mapMode"
      @toggle="toggleMapmode"
      @filter="toggleFilter"
      
    />
    
    <BrowseMap
      v-if="mapMode"
      v-bind:accomodations="filteredAccomodation"
    />
    
    <BrowseFeed
      v-else
      v-bind:accomodations="filteredAccomodation"
      v-bind:filterMatch="filterMatch"
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


      rawAccomodation: [],
      filters:{},
      searchMatch: true,
      filterMatch: true,

      searchAccomodations:[],
      filteredAccomodation:[],

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
      const app = this;
      if(input == ""){
        this.filters.search = "";
        this.showSuggestion=false;  
        this.searchAccomodations= []  
      }
      else{
        this.filters.search = input;
        this.showSuggestion = true;
        //console.log(app.filters)
        app.searchAccomodations = app.rawAccomodation.filter(app.setSearchFilter)
        if(app.searchAccomodations.length==0){
          app.searchMatch = false;
        }else{
          app.searchMatch = true;
        }
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
        app.filteredAccomodation = app.rawAccomodation;
        
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
      obj.googleLat = parseFloat(obj.googleLat)
      obj.googleLong = parseFloat(obj.googleLong)      
    },
    setSearchFilter(search){     
     var searchToLower = search.establishmentName.toLowerCase();
     var inputToLower = this.filters.search.toLowerCase();
     return searchToLower.includes(inputToLower);    
    },
    setFormFilter(obj){  
      const app = this;    
      this.filters.guests = obj.guests;
      this.filters.price  = obj.price;
      this.filters.catering = obj.catering;
      
      var arrayFilterPrice = app.rawAccomodation.filter(app.filterPrice);
      var arrayFilterGuests = arrayFilterPrice.filter(app.filterGuests);
      app.filteredAccomodation = arrayFilterGuests;

      if(app.filters.catering == "null"){
        app.filteredAccomodation = arrayFilterGuests;
      }else{
        var arrayFilterCatering = arrayFilterGuests.filter(app.filterFalseCatering);
        app.filteredAccomodation = arrayFilterCatering;
      }

      if(app.filteredAccomodation.length == 0){
        app.filterMatch = false;
      }else{
        app.filterMatch = true;
      }
      this.toggleFilter();
      

    },
    filterPrice(obj){     
      return parseInt(obj.price) < this.filters.price;
    },
    filterFalseCatering(obj){      
      return obj.selfCatering == this.filters.catering;
    },
    filterGuests(obj){
      return parseInt(obj.maxGuests) > this.filters.guests;
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';

</style>
