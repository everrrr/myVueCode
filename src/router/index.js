import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import Welcome from '../components/welcome/welcome-main.vue'



Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'Welcome-main',
      redirect: '/welcome'
    },
    {
      path: '/home',
      component: () => import('@/components/Home/Home.vue'),
      redirect: '/home-main',
      children: [
        {
          path: '/home-main',
          component: () => import('@/components/Home/HomeMain.vue')
        }
      ]
    },

    {
      path: '/welcome',
      component: () => import('@/components/welcome/welcome-main.vue'),
    },

  ]
})

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router
