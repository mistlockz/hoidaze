<template>
  <div class="modalContact">
    <div class="modalContact__wrapper">

      <div class="modalContact__top">
        <h3>Add Accomodation</h3>
        <button @click="emitClose">X</button>
      </div>

      <div class="modalContact__loading" v-if="loading">
        <img src="@/assets/loading.gif">
      </div>

      <div class="modalContact__success" v-if="formSent">
        <h2>Success!</h2>
        <p>Form was submitted successfully and we will contact you as soon as possible.</p>
      </div>

      <form @submit.prevent="" v-if="showForm">

      <span>Establishment name:
        <span class="errorMsg" v-if="errorName">cant be blank</span>
      </span>
      <input name="name" type="text"
        v-model="estName" 
        v-on:blur="validateName"
        v-bind:class="{ error: errorName }"
      >
      <span>E-mail:
        <span class="errorMsg" v-if="errorEmail">Invalid Email format</span>
      </span>
      <input name="email" type="email"
        v-model="email" 
        v-on:blur="validateEmail"
        v-bind:class="{ error: errorEmail }"
      >
      <span>Description:
        <span class="errorMsg" v-if="errorDesc">Cant be blank</span>
      </span>
      <textarea name="description"
        v-model="desc"
        v-on:blur="validateDesc"
        v-bind:class="{ error: errorDesc }"
      ></textarea>
      <span>Position: (drag the marker to location of the accomodation)</span>
      <span class="errorMsg" v-if="errorCoords">Please set a marker position</span>
      <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 40vh; margin-bottom:10px;"
      ><gmap-marker
        :icon="{
          url:'http://www.wallemdesign.com/map-marker.svg',
          size: {width: 46, height: 46, f: 'px', b: 'px'}, 
          scaledSize: {width: 40, height: 40, f: 'px', b: 'px'}
        }"
        :position="center" 
        :draggable="true"
        @dragend="updateCoordinates"
      ></gmap-marker>
      </gmap-map>
      <span>Image url:
          <span class="errorMsg" v-if="errorUrl">Invalid Url Format</span>
      </span>
      <a href="https://unsplash.com/" target="_blank">Browse images</a>
      <input name="url" type="url"
        v-model="url"
        v-on:blur="validateUrl"
        v-bind:class="{ error: errorUrl }"
      >
      <span>Maximum Guests: {{guests}}</span>
      <input name="name" type="range" min="1" max="25" v-model="guests" class="slider">
      <span>Price: {{ price }} $</span>
      <input name="price" type="range" min="1" max="400" v-model="price" class="slider">
      <div class="row">
        <span>Self-Catering: </span>
        <input type="checkbox" v-model="selfCatering">
      </div>
      
      <button type="submit" @click="validateForm">Send</button>
    </form>
    </div>
    
      
    
   
  </div>
</template>

<script>
export default {
  name: 'ModalContact',
  props: {
    
  },
  data(){
    return{
      center: {lat:60.3917426, lng: 5.3274496},

      estName:"",
      email:"",
      desc:"",
      coords: "",
      url:"",
      guests:13,
      price:200,
      selfCatering:false,

      validName: false,
      errorName: false,
      validEmail: false,
      errorEmail: false,
      validDesc: false,
      errorDesc: false,
      validCoords: false,
      errorCoords: false,
      validUrl: false,
      errorUrl: false,
      validGuests: false,
      errorGuests: false,
      validPrice: false,
      errorPrice: false,
      validCatering: false,
      errorCatering: false,

      formSent: false,
      loading: false,
      showForm: true,




    }
  },
  methods:{
    updateCoordinates(location) {
      this.coords = {
        lat: location.latLng.lat(),
        lng: location.latLng.lng(),
      };
      console.log(this.coords)
      this.validateCoords();
    },    
    validateName(){
      if(this.estName == ""){
        this.errorName = true;
        this.validName = false;
      }else{
        this.errorName = true;
        this.validName = false;
      }
    },
    validateEmail(){
      var validEmailPattern = /^\w.+@\w+\.\w+$/;
      if(validEmailPattern.test(this.email) == false){
        this.validEmail = false;
        this.errorEmail = true;
      }else{
        this.validEmail = true;
        this.errorEmail = false;
      }
    },
    validateDesc(){
      if(this.desc == ""){
        this.errorDesc = true;
        this.validDesc = false;
      }else{
        this.errorDesc = false;
        this.validDesc = true;
      }
    },
    validateUrl(){
       var validUrlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
      if(validUrlPattern.test(this.url) == false){
        this.validUrl = false;
        this.errorUrl = true;
      }else{
        this.validUrl = true;
        this.errorUrl = false;
      }
    },
    validateCoords(){
      if(this.coords == ""){
        this.errorCoords = true;
        this.validCoords = false;
      }else{
        this.errorCoords = false;
        this.validCoords = true;
      }
    },
    validateForm(){
      this.validateName();
      this.validateEmail();
      this.validateDesc();
      this.validateCoords();
      this.validateUrl();
    },
    emitClose(){      
      this.$emit('click');
    },
    sendForm(){
      
      
    },
    EncodeForm(){
      var encodeName = encodeURI(this.estName);
      var encodeMail = encodeURI(this.mail);
      var encodeDesc = encodeURI(this.desc);
      var encodePos = encodeURI(this.estName);
      var encodeName = encodeURI(this.estName);
      var encodeName = encodeURI(this.estName);
      var encodeName = encodeURI(this.estName);
      var encodeName = encodeURI(this.estName);
    }
  }
}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';
.modalContact{
  position: fixed;  
  width:100%;  
  bottom:0;
  animation-name: slide;
  animation-duration: 0.8s;
  animation-direction: normal;
  animation-fill-mode: forwards;  
  
  &__wrapper{
    max-width:910px;
    margin: 0 auto;
    background-color: $orange;
    height: 100%;
    overflow-y: scroll;
    @extend .tab;
  }
  &__success{
    width:80%;
    margin:0 auto;
    color:white;
    margin-top:10px;
  }
  &__top{
    width:80%;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;    
    padding-top: 10px;
    color:white;
    & button{
      background-color: $ui-red;
      &:hover{
        background-color: $ui-yellow;
      }
    }    
  }
}
form{
  width:80%;
  max-width: 700px;
  margin:0 auto;
  padding-top:20px;
  display: flex;
  flex-direction: column;
  & .errorMsg{
    color: $ui-red;
    @extend .fontweight-m;
    
  }
  & .error{
    border: solid $ui-red 2px;
  }
  & a{
    margin-bottom:20px;
    color:$ui-blue;
    @extend .fontweight-m;
    @extend .fontsize-m;

  }
  & textarea{
    max-width: 100%;
    min-width: 100%;
    font-size: 16pt;
    min-height: 10vh;
    max-height: 20vh;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  & span{
    margin-bottom: 10px;
  }
  & input{
    border-radius:5px;
    border: none;
    font-size: 16pt;
    margin-bottom: 20px;
  }
  
  & button{
    background-color: $ui-green;
    margin-bottom: 20px;
    @extend .fontsize-s;
    &:hover{
      background-color: $green;
    }
  }
  & .row{
    @extend .flex__left--center;
    margin: 20px 0px 20px 0px;
    & input{
      margin:0;
      margin-left:20px;
      height:20px;
      width: 20px;

    }
    & span{
      margin: 0;
    }
    
  }
  & .slider{
     -webkit-appearance: none;
    outline: none;
    height:20px;
    border-radius: 5px;
    margin-bottom: 20px;
    &::-webkit-slider-thumb{
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%; 
      background: $ui-blue;
      cursor: pointer;
    }
  }
}

@keyframes slide {
  from {height: 0vh;}
  to {height: 100vh;}
}

</style>
