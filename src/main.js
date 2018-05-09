import Vue from 'vue'
import App from './App'
import router from './router'

import './icons'

import {
  Button,
  Row,
  Col,
  Swipe,
  SwipeItem,
  Lazyload
} from 'vant'
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload)
// Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
