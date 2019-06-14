<template>
  <div class="modalContact">
    <div class="modalContact__wrapper">
      <div class="modalContact__top">
        <h3>Contact us</h3>
        <button @click="emitClose">X</button>
      </div>
      <div class="modalContact__success" v-if="formSent">
        <h2>Success!</h2>
        <p>Form was submitted successfully and we will contact you as soon as possible.</p>
      </div>
      
      <form @submit.prevent="" v-else>
      <span>
        Full Name:     
        <span class="errorMsg" v-if="errorName">Invalid Fullname</span>
      </span>
      <input name="name" 
        v-model="name" 
        v-on:blur="validateName"
        v-bind:class="{ error: errorName }"
        >
      <span>
        E-mail:
        <span class="errorMsg" v-if="errorEmail">Invalid E-mail format</span>
      </span>
      <input name="email"
        v-model="email" 
        v-on:blur="validateEmail"
        v-bind:class="{ error: errorEmail }"
      >
      <span>
        Your Message:
        <span class="errorMsg" v-if="errorMsg">This field cant be blank</span>
      </span>
      <textarea name="message" placeholder="What can we help you with?"
        v-model="msg" 
        v-on:blur="validateMsg" 
        v-bind:class="{ error: errorMsg }">
      </textarea>
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
      name:"",
      email:"",
      msg:"",
      
      validName:false,
      validEmail:false,
      validMsg:false,
      
      errorName:false,
      errorEmail:false,
      errorMsg:false,

      formSent:false,
    }
  },
  methods:{
    validateName(){
      var validFullname = /(\w.+\s).+/;
      if(validFullname.test(this.name) == false){
        this.errorName = true;
        this.validName = false;
      }else{
        this.validName = true;
        this.errorName = false;
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
    validateMsg(){
      if(this.msg == ""){
        this.errorMsg = true;
        this.validMsg = false;
      }else{
        this.errorMsg = false;
        this.validMsg = true;
      }
    },
    validateForm(){
      this.validateName();
      this.validateEmail();
      this.validateMsg();
      if(this.validName == true && this.validEmail == true && this.validMsg == true){
        this.sendForm();
      }
    },
    sendForm(){
      const app = this;
      var name = encodeURI(app.name);
      var email = encodeURI(app.email);
      var msg = encodeURI(app.msg);
      var encodedFormData = "clientName="+name+"&email="+email+"&message="+msg;
      console.log(name +" "+ email + " "+ msg)
      const corsfix = 'https://cors-anywhere.herokuapp.com/';

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          app.formSent = true;
        }
      };
      xhttp.open("POST", corsfix + "http://www.wallemdesign.com/server/contact-success.php", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      xhttp.send(encodedFormData);
    },
    emitClose(){      
      this.$emit('click');
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
    @extend .tab;
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
  &__success{    
    width:80%;
    margin:0 auto;
    margin-top:30px;
    color: white;
  }
}
form{
  width:80%;
  max-width: 700px;
  margin:0 auto;
  padding-top:20px;
  display: flex;
  flex-direction: column;
  & textarea{
    max-width: 100%;
    min-width: 100%;
    font-size: 16pt;
    min-height: 10vh;
    max-height: 30vh;
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
  .errorMsg{
    color: $ui-red;
    @extend .fontweight-m;
    
  }
  .error{
    border: solid $ui-red 2px;
  }
  & button{
    background-color: $ui-green;
    @extend .fontsize-s;
    &:hover{
      background-color: $green;
    }
  }

}

@keyframes slide {
  from {height: 0vh;}
  to {height: 70vh;}
}

</style>
