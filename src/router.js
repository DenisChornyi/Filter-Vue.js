import Vue from 'vue'
import Router from 'vue-router'
import ListItem from './components/ListItem'
import List from './components/List'

Vue.use(Router)
const router = new Router({
  base: '/',
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'list',
      props: true,
      component: List
    },
    {
      path: '/todo/:id',
      name: 'todoList',
      props: true,
      component: ListItem
    }

  ]
})

export default router
