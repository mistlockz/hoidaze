<template>
  <div class="contact">
    <p><strong>Name: </strong>SomeName</p>
    <p><strong>E-mail: </strong> <a :href="test">{{test}}</a></p>
    <p> <strong>Message:</strong> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Repudiandae quasi accusamus qui, nisi iste cum perferendis, 
      voluptatem itaque neque omnis numquam dolorum tempora optio 
      perspiciatis in dolores reiciendis quia ipsum.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AdminMessage',
  props: {
    
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
