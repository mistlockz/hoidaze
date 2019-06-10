import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Browse from './views/Browse.vue'
import Accomodation from './views/Accomodation.vue'
import Admin from './views/Admin.vue'
import AdminManage from './views/AdminManage.vue'
import AdminMessages from './views/AdminMessages.vue'
import AdminOrders from './views/AdminOrders.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/browse',
      name: 'browse',
      component: Browse
    },
    {
      path:'/accomodation',
      name: 'accomodation',
      component: Accomodation
    },
    {
      path:'/admin',
      name: 'admin',
      component: Admin
    },
    {
      path:'/admin/manage',
      name: 'AdminManage',
      component: AdminManage
    },
    {
      path:'/admin/messages',
      name: 'AdminMessages',
      component: AdminMessages
    },
    {
      path:'/admin/orders',
      name: 'AdminOrders',
      component: AdminOrders
    }

  ]
})
