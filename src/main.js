import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://vuejs-b77a2.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'fasdsad!1asd'
axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
