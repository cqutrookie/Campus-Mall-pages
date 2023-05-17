
/**
 * 导入创建路由和确定路由的两个方法
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../components/login/index.vue'
import login from '../components/login/login.vue'
/**
 * 定义路由信息
 */
const routes = [
  {
    path: '/',
    component: index
  },

  {
    path:'/login',
    component:login
  }
]

//创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//导出路由实例
export default router
