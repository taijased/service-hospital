import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/font.css'


import locale from 'element-ui/lib/locale/lang/ru-RU'
Vue.use(ElementUI, { locale })


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
