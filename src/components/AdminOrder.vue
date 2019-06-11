<template>
  <div class="order">
    <h2>{{order.establishment}}</h2>
    <div class="order__flex">
      <p>Name: {{order.clientName}}</p>
      <p>Checkin: <strong>{{order.checkin}}</strong></p>
    </div>
    <div class="order__flex">
      <p>E-mail: <a :href="'mailto:'+order.email">{{order.email}}</a></p>
      <p>Checkout: <strong>{{order.checkout}}</strong> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminOrder',
  props: {
    order:Object,
  },
  data(){
    return{
      test: "mailto:HelloMail"
    }
  }
}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';
.order{
  background-color: white;
  max-width: 900px;
  margin: 0 auto;
  margin-top:10px;
  margin-bottom: 20px;
  border-radius: 10px;
  & h2{
    text-align: center;
    margin:10px;
    padding-top:8px;
  }
  & p{
    padding:20px;
  }
  &__flex{
    @extend .flex__between--center;
    & p{
      flex:1;
    }
  }
}

</style>
