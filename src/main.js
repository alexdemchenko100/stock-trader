import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import { routes } from "./routes"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
