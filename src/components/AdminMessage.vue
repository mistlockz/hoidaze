<template>
  <div class="contact">
    <p><strong>Name: </strong>{{message.clientName}}</p>
    <p><strong>E-mail: </strong> <a :href="'mailto:'+message.email">{{message.email}}</a></p>
    <p> <strong>Message:</strong> <br>{{message.message}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AdminMessage',
  props: {
    message:Object,
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
.contact{
  background-color: white;
  max-width: 900px;
  margin: 0 auto;
  margin-top:10px;
  margin-bottom: 20px;
  border-radius: 10px;
  & p{
    padding:20px;
  }
}

</style>
