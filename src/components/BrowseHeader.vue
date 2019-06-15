<template>
  <div class="[ browseHeader ]">

    <div class="[ browseHeader__wrapper ]">
      <img src="@/assets/logoedit.svg" class="[ logo ]" alt="image of logo">
      <div class="[ browseHeader__search ]">
        <input name="search" placeholder="Search accomodation" autocomplete="off" @keyup="emitInput">
        <button> Search </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'new',

  methods:{
    emitInput(e){
      this.$emit("input", e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/styles/main.scss';

  .browseHeader{
    background-color: $red;
    
    &__wrapper{
      max-width: 900px;
      margin: 0 auto;
      min-height: 50px;
      height: 10vh;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & img{
        height:80%; 
      }
    }
    &__search{
      display: flex;
      align-items: center;

      & input{
        width:100%;
        font-size: 16pt;
        border-radius: 5px;
        border:none;
        max-width: 400px;
      }
      
      & button {
        margin:10px;  
      }
    }
  }
  

</style>
