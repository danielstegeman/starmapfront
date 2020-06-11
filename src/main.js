import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VModal from 'vue-js-modal'



Vue.use(VModal, { dynamic: true, injectModalsContainer: true })
Vue.config.productionTip = false
Vue.prototype.$axios = Axios.create({baseURL:"http://localhost:5000/api/"})
Vue.prototype.$unityConnector = window.UnityConnector
Vue.prototype.$starBuffer = []

new Vue({
  
  render: h => h(App),
}).$mount('#app')
