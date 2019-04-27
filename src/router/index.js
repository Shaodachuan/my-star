import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myGrade from '@/page/grade/grade'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myGrade',
      component: myGrade
    },
    {
      path: '/grade',
      name: 'myGrade',
      component: myGrade
    }
  ]
})
