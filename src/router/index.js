import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myGrade from '@/page/grade/myGrade'
import myPlatForm from '@/page/platform/myPlatForm'
import myPlatInfo from '@/page/platinfo/myPlatInfo'
import myArchives from '@/page/platinfo/myArchives'
import myData from '@/page/platinfo/myData'
import myLevel from '@/page/platinfo/myLevel'
import myRecord from '@/page/platinfo/myRecord'
import myComment from '@/page/platinfo/myComment'
import myPlatNews from '@/page/platnews/myPlatNews'
import myFlash from '@/page/platnews/myFlash'
import myInformation from '@/page/platnews/myInformation'
import myNotice from '@/page/platnews/myNotice'
import myPlatWeibo from '@/page/weibo/myPlatWeibo'
import myNormal from '@/page/platform/myNormal'
import myTransfer from '@/page/platform/myTransfer'
import myShutdown from '@/page/platform/myShutdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myGrade',
      component: myGrade
    },
    {
      path: '/',
      name: 'myGrade',
      component: myGrade
    },
    {
      path: '/platform',
      name: 'myPlatForm',
      component: myPlatForm,
      children:[
        {path:'/',component:myNormal},
        {path:'/normal',component:myNormal},
        {path:'/transfer',component:myTransfer},
        {path:'/shutdown',component:myShutdown}
      ]
    },
    {
      path: '/platinfo',
      name: 'myPlatInfo',
      component: myPlatInfo,
      children:[
        {path:'/archives',component:myArchives,name: 'myArchives'},
        {path:'/data',component:myData,name: 'myData'},
        {path:'/level',component:myLevel,name: 'myLevel'},
        {path:'/record',component:myRecord,name: 'myRecord'},
        {path:'/comment',component:myComment,name: 'myComment'}
      ]
    },
    {
      path: '/platnews',
      name: 'myPlatNews',
      component: myPlatNews,
      children:[
        {path:'/',component:myFlash},
        {path:'/flash',component:myFlash},
        {path:'/information',component:myInformation},
        {path:'/notice',component:myNotice}
      ]
    },
    {
      path: '/platweibo',
      name: 'myPlatWeibo',
      component: myPlatWeibo
    }
  ]
})
