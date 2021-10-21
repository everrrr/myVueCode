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
      meta: {
        title: '首页'
      },
      redirect: '/home-box',
      children: [{
          path: '/home-box',
          component: () => import('@/components/Home/HomeBox'),
          meta: {
            title: '首页'
          },
          redirect: '/home-main',
          children: [{
            path: '/home-main',
            name: 'HomeMain',
            components: {
              main: () => import('@/components/Home/HomeMain'),
              bottomMain: () => import('@/components/Home/HomeBottom')
            }
          }]
        },

        {
          path: '/vue-study',
          component: () => import('@/components/vueStudy/vuexStudy/vuexIntroduction'),
          redirect: '/vue-study-header',
          meta: {
            title: 'vue-study'
          },
          children: [{
            path: '/vue-study-header',
            component: () => import('@/components/vueStudy/vuexStudy/vueHeader'),
            meta: {
              title: 'vue-study'
            },
          }, ]
        },
        {
          path: '/amap-study',
          component: () => import('@/components/AMap/amap_home'),

          redirect: '/amap-header',
          children: [{
            path: '/amap-header',
            component: () => import('@/components/vueStudy/vuexStudy/vueHeader'),
            meta: {
              title: '高德地图学习'
            },
          }, ]
        },
        {
          path: '/amap-init',
          component: () => import('@/components/AMap/amap_init_one'),

          redirect: '/amap-init-header',
          children: [{
            path: '/amap-init-header',
            component: () => import('@/components/vueStudy/vuexStudy/vueHeader'),
            meta: {
              title: '高德地图学习'
            },
          }, ]
        },
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
