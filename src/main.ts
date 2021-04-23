import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VCalendar from 'v-calendar'
import axios from 'axios'

axios.defaults.baseURL = 'https://10.16.197.86:8443/api/ivr/'

Vue.config.productionTip = false

Vue.use(VCalendar, {
  componentPrefix: 'vc'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
