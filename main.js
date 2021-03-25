import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

/* 引入uView UI库 */
import uView from 'uview-ui';
Vue.use(uView);
//引入vuex
import store from './store'
Vue.prototype.$store = store

const app = new Vue({
    ...App
})
app.$mount()
