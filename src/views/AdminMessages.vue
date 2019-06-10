<template>
  <div class="messages">
    <AdminHeader/>
    <AdminNav/>
  </div>
</template>

<script>
import AdminHeader from '@/components/AdminHeader.vue'
import AdminNav from '@/components/AdminNav.vue'

export default {
  name: 'AdminMessages',
  components: {
    AdminHeader,
    AdminNav
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.messages{
  background-color: $grey;
  min-height: 100vh;
}
</style>
