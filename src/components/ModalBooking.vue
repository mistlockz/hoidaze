<template>
  <div class="booking">
    <div class="booking__wrapper">
      <form @submit.prevent>
        <div class="booking__header">
          <h2>Booking</h2>
          <button @click="emitToggle">X</button>
        </div>        
        <div v-if="checkinDate" class="booking__checkin">
          Check-in Date: {{checkinDate}}<button @click="resetCheckin" v-if="!checkoutDate">Edit</button>
        </div>
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
        <span>Your Name:</span>
        <input type="text" name="name" class="booking__input">
        <span>Your E-mail:</span>
        <input type="text" name="email"  class="booking__input">
        <button type="submit" class="booking__submit" @click="validateForm">Confirm Booking</button>
      </form>
    </div>
    
  </div>
</template>

<script>
import newVue from './new.vue';
export default {
  name: 'ModalBooking',
  props: {
    
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
    this.buildCalendar(this.month, this.year)     
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
      var fulldate = year + "-" + month + "-" + date;      ;
      if(this.checkinDate == ""){
        this.firstDate = year+month+date;
        this.statusText = "Please select check-out date:";
        this.checkinDate = fulldate;
      }else{
        var secondDate = year+month+date;       
        if(secondDate <= this.firstDate){
          this.errorText= 'The check-out date cant be prior to the check-in'
        }else{
          this.errorText='';
          this.statusText= "";
          this.checkoutDate = fulldate;
          this.showCalendar = false;
        }
        
      }
    },
    resetCheckin(){
      this.checkinDate = "";
      this.errorText = ""
      this.statusText = "Please select check-in date:"
    },
    resetCheckout(){
      this.checkoutDate = "";
      this.statusText = "Please select check-out date:"
      this.showCalendar = true;
    },
    validateForm(){
      
    }


    
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
      firstDate: ''
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
  
  &__header{
    @extend .flex__between--center;

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

</style>
