// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'

//import './assets/css/reset.css'
import './assets/css/global.css'
import './assets/font/font_iconfont/iconfont.css'
//导入axios
import axios from 'axios'//暂时用不到
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store.js'
import common from './assets/js/public.js'
import VueAMap from 'vue-amap'



Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.$common = common

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '3923542f96357868ac5def66fdce7a71',
  plygin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
})


router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  console.log(next)
  
  if(to.meta.title) {
    document.title = to.meta.title
    console.log(123456)
  }
  next()
})




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
