// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

function xx(el,value,err){
  console.log(el,val,err)
};
Vue.prototype.xx=xx;
router.beforeEach((to,from,next)=>{
  next()   
  window.addEventListener('load',function(){
    console.log('刷新了');
 console.log(from,'即将离开的');
 console.log(to,'目标');
 if(to.name=='register'||to.name=='login'){
   console.log('离开注册');
   router.push({path:'/'})
 }
 else if(to.name=='find'){  
   setTimeout(function(){
     alert('马上回到首页')
    router.push({path:'/'})
   },3000)
 }
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
