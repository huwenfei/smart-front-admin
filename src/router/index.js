// import Vue from 'vue'
import Router from 'vue-router'
const login = ()=>import('../views/login')
const frame = ()=>import('../views/frame')
const upload = ()=>import('../views/upload')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: frame,
      children:[
        {
          alias:'/home',
          path: 'upload',
          name: 'upload',
          component: upload
        }
      ]
    }
  ]
})
