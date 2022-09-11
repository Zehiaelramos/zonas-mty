import Vue from 'vue'
import App from './App.vue'

/* eslint-disable */

import router from "./router"

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons'

Vue.config.productionTip = false

var vm = new Vue({
  data: {
    message: 'Hello Vue!'
  },
  router,
  render: h => h(App)
}).$mount('#app')
