<template>
  <div class="orders">
    <AdminHeader/>
    <AdminNav/>
    <AdminOrder/>
    <AdminOrder/>
  </div>
</template>

<script>
import AdminHeader from '@/components/AdminHeader.vue'
import AdminNav from '@/components/AdminNav.vue'
import AdminOrder from '@/components/AdminOrder.vue'

export default {
  name: 'AdminOrders',
  components: {
    AdminHeader,
    AdminNav,
    AdminOrder
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
