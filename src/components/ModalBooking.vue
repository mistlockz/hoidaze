<template>
  <div class="booking">
    <div class="booking__wrapper">
      <form @submit.prevent="submitBooking">
        <div class="booking__header">
          <h2>Booking</h2>
          <button @click="emitToggle">X</button>
        </div>        
        <div v-if="checkinDate" class="booking__checkin">
          Check-in Date: {{checkinDate}}<button @click="resetCheckin">Edit</button>
        </div>
        <div v-if="checkoutDate" class="booking__checkin">
          Check-out Date: {{checkoutDate}}<button>Edit</button>
        </div>
        <h4>{{statusText}}</h4>
        <div class="calendar">
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
        <input type="text" name="name">
        <input type="text" name="email">
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
        alert("same month")      
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
        for(var i of pastDays){
          console.log(i)
          i.disabled="default";
          i.className = "calendar__day";
          
        }
        for(var i of currentDay){
          i.className = "calendar__day";
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
        alert("cant go back")
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
      //console.log(offset)
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
      //alert(event.target.innerHTML)
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
        this.statusText = "Please select check-out date:";
        this.checkinDate = fulldate;
      }else{
        this.statusText= "";
        this.checkoutDate = fulldate;
      }
    },
    resetCheckin(){
      this.checkinDate = "";
      this.statusText = "Please select check-in date:"
    },
    resetCheckout(){
      this.checkoutDate = "";
      this.statusText = "Please select check-out date:"
    }
    


    
  },
  data (){
    return{
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
      checkinDate:"",
      checkoutDate: "",
    }
  }
}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';
h2{
  margin-bottom: 20px;
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
    
    & form{
      padding-top: 20px;
      width:90%;
      margin: 0 auto;
      
    }
  }
  &__checkin{
    @extend .flex__left--center;
    padding-bottom:20px;
    & button{
      margin-left: 10px;
    }
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
