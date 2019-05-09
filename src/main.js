// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import { Table,TableColumn } from 'element-ui';
import VCharts from 'v-charts'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import ECharts from 'vue-echarts'
import echarts from 'echarts'


//使用iView组件
Vue.use(iView);
//引入Table组件
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
//引入表格插件
Vue.use(VCharts);
Vue.use(VueChartkick, {adapter: Chart})
Vue.component('e-chart', ECharts)
Vue.prototype.$echarts = echarts


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



