<template>
  <div class="adminNav">
    <router-link :to="{name: 'AdminOrders'}" class="adminNav__link">Orders</router-link>
    <router-link :to="{name: 'AdminMessages'}" class="adminNav__link">Messages</router-link>
    <router-link :to="{name: 'AdminManage'}" class="adminNav__link">Manage</router-link>
  </div>
</template>

<script>
export default {
  name: 'AdminNav',
  props: {
    
  }

}
</script>


<style scoped lang="scss">
@import '@/styles/main.scss';
.adminNav{
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  background-color: $orange;
  justify-content: space-evenly;
  align-items: center;
  padding:15px 0px 15px 0px;
  &__link{
    color:white;
    @extend .fontsize-m;   
    text-decoration-line: none;  
  }
  &__link:hover{
      cursor: pointer;      
  }
}
.router-link-exact-active{
  color: white;
  text-decoration-line: underline;
  @extend .fontweight-l;
  transform: scale(1.2)
}
</style>
