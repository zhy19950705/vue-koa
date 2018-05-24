import Vue from 'vue'
import Router from 'vue-router'

// const ShoppingMall=()=>import('@/views/ShoppingMall')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ShoppingMall',
    component: ()=>import('@/views/ShoppingMall')
  }]
})
