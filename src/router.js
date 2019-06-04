import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Browse from './views/Browse.vue'
import Accomodation from './views/Accomodation.vue'

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
    }
  ]
})
