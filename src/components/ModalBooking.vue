<template>
  <div class="booking">
    <div class="booking__wrapper">
      <form>
        <div class="booking__header">
          <h2>Booking</h2>
          <button>X</button>
        </div>        
        <div class="booking__checkin">
          <span>Check-in:</span>
          <span><strong>{{}}</strong></span>
          <button>Edit</button>
        </div>
        <div class="booking__checkin">
          <span>Check-out:</span>
          <span><strong>{{}}</strong></span>
          <button>Edit</button>
        </div>
        
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
            class="calendar__day --extra"
            >{{tile}}
            </button>       
            <button 
            v-for="tile of this.daysInMonth" 
            v-bind:key="tile"
            class="calendar__day"
            >{{tile}}</button>
            <button
            v-for="tile of this.extraDays"
            v-bind:key="'extra'+ tile"
            class="calendar__day --extra"
            disabled="true"
            >{{tile}}</button>
          </div>
        </div>
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
    //console.log(d)
    var currentYear = d.getFullYear();
    
    this.year = currentYear;

    var currentMonth = d.getMonth();
    //console.log(currentMonth)
    
    this.month = currentMonth;
    
    this.buildCalendar(this.month, this.year)

   
    
    
      
  },
  methods:{
    buildCalendar(month, year){
      this.setDaysInMonth(month, year);
      this.setOffsetDays(month, year);
      this.setExtraDays(this.daysInMonth, this.offsetDays)
      this.setDaysLastMonth(month, year)
      
    },
    nextMonth(){
      this.month++;
      if(this.month==12){
        this.month = 0;
        this.year++;
      }
      this.buildCalendar(this.month, this.year);
    },
    prevMonth(){
      this.month--;
      if(this.month == -1){
        this.month = 11;
        this.year--;
      }
      this.buildCalendar(this.month, this.year);
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
      console.log(array)
      this.prevMonthArray = array;
    }

    
  },
  data (){
    return{    
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
  }
}
.calendar{
  padding-bottom:40px;
  &__header{
    @extend .flex__between--center;
    background-color: white;
    color:black;
    
  }
  &__body{
      width:100%;   
  }
  &__day{
      width:13%;
      background-color: white;
      color:$ui-blue;
      border: solid black 1px;
      padding:10px 0px 10px 0px;
      
      
  }
  &__week{
    width:100%;
    
  }
  &__weekday{
      width:13%;
      background-color: white;
      color:$ui-blue;
      border: solid black 1px;
      text-align: center;
      padding:10px 0px 10px 0px;
      display: inline-block;
  }
  .--extra{
    background-color: $grey;
  }
}
</style>
