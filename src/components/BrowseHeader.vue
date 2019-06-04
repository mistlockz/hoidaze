<template>
  <div class="browseHeader">
    <div class="browseHeader__wrapper">
      <img src="@/assets/logoedit.svg" class="logo">
      <div class="browseHeader__search">
        <input name="search" placeholder="Search accomodation" autocomplete="off">
        <button>Search</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'new',
  props: {
    
  }
}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';
img{
  height:80%;  
}
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
  }
  &__search{
    display: flex;
    align-items: center;
  }
}
input{
  width:100%;
  font-size: 16pt;
  border-radius: 5px;
  border:none;
  max-width: 400px;
}
button{
  margin:10px;
  
}

</style>
