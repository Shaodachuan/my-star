<template>
  <!-- wrapper -->
  <div>
     <!-- 图片 -->
      <div :style="[picStyle]" class="my_inb">
        <img  :src="mySrc" :style="[pic1Style]" class="my_vam"/>
      </div>
      <!-- 文字 -->
      <div class="my_fs24 my_fwb my_tac my_inb" :style="textStyle">
          {{myContent}}<span class="my-total-unit">位</span>
      <div class="my_fs16 my-total-title">{{myTitle}}</div>
      </div>
  </div>
  <!-- wrapper -->
</template>

<script>
export default {
  //属性
  props: ['myContent','myTitle','mySrc'],
  //名称
  name: 'myPlatTotal',
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
      aa: "https://upload-images.jianshu.io/upload_images/8941567-0987d79b51f4058c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/48/format/webp",
      //样式
      picStyle:{
        height: '70px',
        width: '70px',
        lineHeight: '70px'
      },
      textStyle:{
        height: '70px',
        verticalAlign:'top',
        textAlign: 'left'
      },
      pic1Style:{
        height: '40px',
        width: '40px'
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.my-total-title{
  padding-top: 10px;
  font-weight: normal;
  font-size: 12px;
}

.my-total-unit{
  font-size: 16px;
  padding-left:3px; 
}

</style>
