<template>
  <div class="orders">
    <AdminHeader/>
    <AdminNav/>
  </div>
</template>

<script>
import AdminHeader from '@/components/AdminHeader.vue'
import AdminNav from '@/components/AdminNav.vue'

export default {
  name: 'AdminOrders',
  components: {
    AdminHeader,
    AdminNav
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.orders{
  background-color: $grey;
  min-height: 100vh;
}
</style>
