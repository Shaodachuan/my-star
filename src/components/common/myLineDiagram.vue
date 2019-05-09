<template>
  <!-- wrapper -->
  <div>
      <!-- 文字 -->
      <div class="my_fs24 my_fwb my_tac my_inb" :style="heightStyle">
          {{myContent}}
      <div class="my_fs16">{{myTitle}}</div>
      </div>
      <!-- 图片 -->
      <e-chart :options="orgOptions" :auto-resize="true" :style="[heightStyle,picStyle]" class="my_inb"/>
  </div>
  <!-- wrapper -->
</template>

<script>
export default {
  //属性
  props: ['myContent','myTitle'],
  //名称
  name: 'myLineDiagram',
  //数据
  data () {
    //初始化表格样式
    this.orgOptions = {
      legend: {
        height: '80px',
        width: '80px'
      },
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed'],
          show: false
      },
      yAxis: {
          type: 'value',
          show: false
      },
      series: [{
          data: [0, 7, 0],
          type: 'line',
      }]
    }
    return {
      //样式
      heightStyle:{
        height: '70px',
      },
      picStyle:{
        width: '70px',
        verticalAlign:'top'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
