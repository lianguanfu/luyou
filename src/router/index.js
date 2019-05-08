import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import Login from '@/components/login'
import register from '@/components/register'
import notfind from '@/components/notfind'
import son from '@/components/son'
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',   
      component: HelloWorld
    },
    {
      path:'/Login',
      name:'login',
      component:Login,
      children:[{
        path:'erzi',
        name:'son',
        component:son

      }]
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/find',
      name:'find',
      component:notfind

    },
    {
      path:'*',
      redirect:'/find',
    }
  ]
})
