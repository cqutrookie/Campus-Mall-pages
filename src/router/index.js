
/**
 * 导入创建路由和确定路由的两个方法
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../components/login/index.vue'
import login from '../components/login/login.vue'
import register from '../components/login/register.vue'
import shopmain from '../components/shop/shopmain.vue'
import AboutUs from '../components/shop/AboutUs.vue'
/**
 * 定义路由信息
 */
const routes = [
  {
    path: '/',
    component: index
  },
    {
        path: '/AboutUs',
        component: AboutUs
    },
  {
    path:'/login',
    component:login,
    // meta: { requireAuth: true },//验证该组件是否需要登录验证
  },
  {
    path:'/register',
    component:register
  },
  {
    path:'/shopmain',
    component:shopmain,
    // meta: { requireAuth: true }
  }
]

//创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  //需要登录的组件
  if (to.meta.requireAuth) {
      //获取登录状态
      if (sessionStorage.getItem('loginstatus')) {
          next()
      }
      else {
          alert("请先登录")
          next({
              path: '/'
          })
      }
  }
  else {
      next()
  }
})
//导出路由实例
export default router
