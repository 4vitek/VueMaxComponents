import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Looper from './Looper.vue'
import Details from './Details.vue'
import Footer from './Footer.vue'

Vue.component('hdr',Header);
Vue.component('looper',Looper);
Vue.component('det',Details);
Vue.component('ftr',Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})
