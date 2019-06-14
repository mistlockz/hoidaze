<template>
  <div class="accomodationCard">
    <div class="cardImg">
      <img v-bind:src="place.imageUrl">
    </div>
    <div class="cardInfo">
      <div class="cardInfo__top">
        <h2>{{place.establishmentName}}</h2>
      </div>
      <div class="cardInfo__bottom">
        <div class="cardInfo__content">
          <p>
            Max-guests: <br>
            <strong>{{place.maxGuests}}</strong> <br>
            Prices from: <br>
            <strong>{{place.price}}$</strong>
          
          </p>
        </div>
        <div class="cardInfo__button">
          <button>Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminAccomodation',
  props: {
    place:Object
  }
}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';
.accomodationCard{
  margin-top: 10px;
  display: flex;  
  padding:5px;
  background-color: white;
}
.cardImg{
  flex:1;
  max-width: 200px;
  margin: 10px;
}
.cardInfo{
  flex:3;
  margin:10px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  
  &__top{
    margin-bottom: 10px;
  }
  &__bottom{
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    

  }
  &__button{
    align-self: flex-end;
  }
}

</style>
