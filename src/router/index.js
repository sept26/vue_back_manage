import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import dashboard from '@/views/modules/dashboard'
import table from '@/views/modules/table'

Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    name: 'home',
    component: home,
    children: [
      {
        path: '/dashboard',
        name: dashboard,
        component: dashboard
      },
      {
        path: 'table',
        name: table,
        component: table
      }
    ]
  }
]

export default new Router({
  routes
})
