<template>
  <div class="booking">
    <div class="booking__wrapper">
      
      
      <div class="booking__header">
          <h2>Booking</h2>          
          <button @click="emitToggle">X</button>
      </div>
      <div class="booking__loading" v-if="loading">
        <img src="@/assets/loading.gif">
      </div>

      <div class="booking__success" v-if="formSent">
        <h2>Success!</h2>
        <p>Form was submitted successfully and we will contact you as soon as possible.</p>
      </div>
      <form @submit.prevent  v-if="showFrom">
        
        <h3>{{this.place}}</h3>
        <span class="errorMsg" v-if="errorCheckin">You have to select Checkin date</span>
        
        <div v-if="checkinDate" class="booking__checkin">
          Check-in Date: {{checkinDate}}<button @click="resetCheckin" v-if="!checkoutDate">Edit</button>
        </div>
        <span class="errorMsg" v-if="errorCheckout">You have to select Checkout date</span> 
        <div v-if="checkoutDate" class="booking__checkin">
          Check-out Date: {{checkoutDate}}<button @click="resetCheckout">Edit</button>
        </div>
        <h4>{{statusText}}<strong class="errorText">{{errorText}}</strong></h4>
        <div class="calendar" v-if="showCalendar">
          <div class="calendar__header">
            <button class="back"
              @click="prevMonth"
            >prev</button>
            <h3>{{monthArray[month]}}  {{year}}</h3>
            <button class="back"
              @click="nextMonth"
            >Next</button>
          </div>

          <div class="calendar__week">
            <div class="calendar__weekday">
              Sun
            </div>
            <div class="calendar__weekday">
              Mon
            </div>
            <div class="calendar__weekday">
              Tue
            </div>
            <div class="calendar__weekday">
              Wed
            </div>
            <div class="calendar__weekday">
              Tur
            </div>
            <div class="calendar__weekday">
              Fri
            </div>
            <div class="calendar__weekday">
              Sat
            </div>
            
          </div>

          <div class="calendar__body">     
            <button
            v-for="tile of this.prevMonthArray"
            v-bind:key="'prev'+ tile"
            class="calendar__day--extra"
            disabled="true"
            >{{tile}}
            </button>       
            <button 
            v-for="tile of this.daysInMonth" 
            v-bind:key="tile"
            class="calendar__day"
            @click="selectDate"
            >{{tile}}</button>
            <button
            v-for="tile of this.extraDays"
            v-bind:key="'extra'+ tile"
            class="calendar__day--extra"
            disabled="true"
            >{{tile}}</button>
          </div>
        </div>
        <span>Your Fullname:
          <span class="errorMsg" v-if="errorName">Invalid Fullname</span>
        </span>
        <input type="text" name="name" class="booking__input" 
          v-model="name" 
          v-on:blur="validateName"
          v-bind:class="{ error: errorName }"
        >
        <span>Your E-mail:
          <span class="errorMsg" v-if="errorEmail">Invalid E-mail format</span>
        </span>
        <input type="text" name="email"  class="booking__input"
          v-model="email" 
          v-on:blur="validateEmail"
          v-bind:class="{ error: errorEmail }"
        >
        <button type="submit" class="booking__submit" @click="validateForm">Confirm Booking</button>
      </form>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'ModalBooking',
  props: {
    place:String,
  },
  created(){
    var d = new Date();    
    var currentYear = d.getFullYear();
    this.todayYear = currentYear;   
    this.year = currentYear;
    var currentMonth = d.getMonth();    
    this.month = currentMonth;
    this.todayMonth = currentMonth;
    var today = d.getDate();
    this.todayDate = today;
    this.buildCalendar(this.month, this.year);
       
  },
  mounted(){
    this.setPastDays();
    
    
  },
  methods:{
    buildCalendar(month, year){
      this.setDaysInMonth(month, year);
      this.setOffsetDays(month, year);
      this.setExtraDays(this.daysInMonth, this.offsetDays)
      this.setDaysLastMonth(month, year)      
    },
    setPastDays(){
      var days = document.querySelectorAll('.calendar__day'); 
      var pastDays = document.querySelectorAll('.calendar__day--past');
      var currentDay = document.querySelectorAll('.calendar__day--today')   
      if(this.month == this.todayMonth && this.year == this.todayYear){
            
        var today = this.todayDate;
        for(var i of days){          
          if(i.innerHTML < today){
            i.disabled="true";
            i.className = "calendar__day--past"
          }
          if(i.innerHTML == today){
            i.className = "calendar__day--today"
          }
        }
      }else{
        for(var j of pastDays){
          
          j.removeAttribute('disabled')
          j.className = "calendar__day";
          
        }
        for(var k of currentDay){
          k.className = "calendar__day";
        }
      }
    },
    nextMonth(){      
      this.month++;
      if(this.month==12){
        this.month = 0;
        this.year++;
      }
      this.buildCalendar(this.month, this.year);
      this.setPastDays();
    },
    prevMonth(){
      if(this.year == this.todayYear && this.month == this.todayMonth){
        return;
      }else{
        this.month--;
      if(this.month == -1){
        this.month = 11;
        this.year--;
      }
      this.buildCalendar(this.month, this.year);
      this.setPastDays();
      }
      
    },
    setDaysInMonth(month, year){      
      var numberOfDays = new Date(year, month+1, 0).getDate();     
      this.daysInMonth = numberOfDays;
    },
    setOffsetDays(month, year){
      var offset= new Date(year,month, 1).getDay();
      
      this.offsetDays = offset;
    },
    setExtraDays(num, num2){
      var extra = 42 - num - num2;      
      this.extraDays = extra;
    },
    setDaysLastMonth(month, year){          
      var prevMonthDays = new Date(year, month, 0).getDate();
      var startDate = prevMonthDays - this.offsetDays + 1;
      var array= [];      
      for(var i = startDate; i <= prevMonthDays; i++){
        array.push(i)
      }
      
      this.prevMonthArray = array;
    },
    emitToggle(){
      this.$emit('click');
    },
    selectDate(event){
      
      var year = this.year;
      var month = this.month.toString();
      if(month.length == 1){
        month = 0 + month;
      }      
      var date = event.target.innerHTML;

      if(date.length == 1){
        date = 0 + date;
      }      
      var fulldate = year + "-" + month + "-" + date;
      if(this.checkinDate == ""){
        this.firstDate = year+month+date;
        this.statusText = "Please select check-out date:";
        this.checkinDate = fulldate;
        this.validCheckin = true;
        this.errorCheckin = false;
      }else{
        var secondDate = year+month+date;       
        if(secondDate <= this.firstDate){
          this.errorText= 'The check-out date cant be prior to the check-in'
        }else{
          this.errorText='';
          this.statusText= "";
          this.checkoutDate = fulldate;
          this.validCheckout = true;
          this.errorCheckout = false;
          this.showCalendar = false;
        }
        
      }
    },
    resetCheckin(){
      this.checkinDate = "";
      this.validCheckin = false;
      this.errorCheckin = false;
      this.errorText = ""
      this.statusText = "Please select check-in date:"
    },
    resetCheckout(){
      this.checkoutDate = "";
      this.validCheckout = false;
      this.errorCheckout = false;
      this.statusText = "Please select check-out date:"
      this.showCalendar = true;
    },

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
    validateCheckin(){
      if(this.checkinDate == ""){
        this.validCheckin = false;
        this.errorCheckin = true;
      }else{
        this.validCheckin = true;
        this.errorCheckin = false;
      }
    },
    validateCheckout(){
      if(this.checkoutDate == ""){
        this.validCheckout = false;
        this.errorCheckout = true;
      }else{
        this.validCheckout = true;
        this.errorCheckout = false;
      }
    },
    validateForm(){
      this.validateName();
      this.validateEmail();
      this.validateCheckin();
      this.validateCheckout();
      if(this.validName == true && this.validEmail == true){
        this.sendForm();
      }
    },
    sendForm(){
      const app = this;
      var est = encodeURI(app.place);
      var name = encodeURI(app.name);
      var email = encodeURI(app.email);
      var checkin = encodeURI(app.checkinDate);
      var checkout = encodeURI(app.checkoutDate);
      var encodedFormData = "establishment="+est+"&clientName="+name+"&email="+email+"&checkin="+checkin+"&checkout="+checkout;
      
      const corsfix = 'https://cors-anywhere.herokuapp.com/';

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if(this.readyState == 1){
          app.loading = true;
          app.showFrom = false;
        }
        if (this.readyState == 4 && this.status == 200) {
          console.log("Form Sent")
          app.loading = false;
          app.formSent = true;
        }
      };
      xhttp.open("POST", corsfix + "http://www.wallemdesign.com/server/enquiry-success.php", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      xhttp.send(encodedFormData);
    },
        
  },
  data (){
    return{
      showCalendar: true,
      todayYear: Number,
      todayMonth: Number,
      todayDate: Number,  
      year: Number,
      month: Number,
      date: Number,
      daysInMonth: Number,
      firstInMonth: Number,
      offsetDays: Number,
      extraDays: Number,
      monthArray:[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      prevMonthArray:Array,
      statusText:"Please select check-in date:",
      errorText:"",
      checkinDate:"",
      checkoutDate: "",
      firstDate: '',
      name:"",
      email:"",
      errorName:false,
      validName:false,
      errorEmail:false,
      validEmail:false,
      validCheckin: false,
      errorCheckin: false,
      validCheckout: false,
      errorCheckout: false,
      formSent:false,
      loading: false,
      showFrom:true,
    }
  }
}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';
h2{
  padding: 20px 0px 20px 0px;
}
.booking{
  position: fixed;  
  width:100%;  
  bottom:0;
  &__loading{
    display: flex;
    justify-content: center;
    & img{
      width: 200px;
      height: 200px;
    }
  }
  &__header{
    @extend .flex__between--center;
    width: 90%;
    margin:0 auto;
    color:white;

    & button{
      background-color: $ui-red;
    }
    
  }
  &__wrapper{
    max-width: 910px;
    margin: 0 auto;
    background-color: $orange;
    border-radius: 10px;
    padding-bottom:40px;  
    & form{
      padding-top: 20px;
      width:90%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      
    }
  }
  &__checkin{
    @extend .flex__left--center;
    padding-bottom:20px;
    & button{
      margin-left: 10px;
    }
  }
  &__input{
    margin-bottom:15px;
    @extend .fontsize-m;
    border:none;
    border-radius: 5px;
  }
  &__submit{
    background-color: $ui-green;
    
    
  }
}
.calendar{
  padding-bottom:40px;
  &__header{
    @extend .flex__between--center;
    background-color: white;
    color:black;
    padding:10px;
    
  }
  &__body{
      width:100%;
      display: flex;
      flex-wrap: wrap; 
  }
  &__day{
      min-width: 13%;
      flex:1;
      margin:1px;
      background-color: white;
      color:$black;
      border: solid black 1px;
      padding:10px 0px 10px 0px;   
      &--extra{
        @extend .calendar__day;        
        background-color: $grey;
        color: $grey-dark;        
      }
      &--today{
        @extend .calendar__day;
        background-color: $ui-blue;
      }
      &--past{
        @extend .calendar__day;
        background-color: $grey;
        color: $grey-dark; 
      }
  }
  &__week{
    width:100%;
    display: flex;
    
  }
  &__weekday{
      flex:1;
      background-color: white;
      color:$ui-blue;
      border: solid black 1px;
      text-align: center;
      padding:10px 0px 10px 0px;
      display: inline-block;
  }
  
}
.errorMsg{
    color: $ui-red;
    @extend .fontweight-m;    
}
.error{
  border: solid $ui-red 2px;
}
</style>
