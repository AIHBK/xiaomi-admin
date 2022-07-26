import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import router from './router/Router.js'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/iconfont.css'
import store from '../store/vuex.js'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
