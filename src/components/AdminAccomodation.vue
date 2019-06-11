<template>
  <div class="accomodationCard">
    <div class="cardImg">
      <img src="@/assets/logo.png">
    </div>
    <div class="cardInfo">
      <div class="cardInfo__top">
        <h2>Accomodation name</h2>
      </div>
      <div class="cardInfo__bottom">
        <div class="cardInfo__content">
          <p>
            Max-guests: <br>
            <strong>20</strong> <br>
            Price from: <br>
            <strong>100 N0K</strong>
          
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
