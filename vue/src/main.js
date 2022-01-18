import Vue from 'vue'
import App from './App.vue'
// Import store Add to the application 
import store from './store'
// Import the router and add it to the app.
import router from './router'

Vue.config.productionTip = false

//import bootstrap and font-awesome
import "bootstrap/dist/css/bootstrap.min.css"
//import "font-awesome/css/bootstrap.min.css"

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')