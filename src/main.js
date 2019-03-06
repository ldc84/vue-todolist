import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugin
import VueMDCAdapter from 'vue-mdc-adapter'
import 'vue-mdc-adapter/dist/vue-mdc-adapter.css';

Vue.use(VueMDCAdapter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
