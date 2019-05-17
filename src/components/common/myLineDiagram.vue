<template>
  <!-- wrapper -->
  <div>
    <!-- 文字 -->
    <div class="my_fs24 my_fwb my_tac my_inb" :style="[heightStyle,platNormal.fontStyle]">
      {{platNormal.myContent}}<span class="my-line-unit">家</span>
      <div class="my_fs16 my-line-title">{{platNormal.myTitle}}</div>
    </div>
    <!-- 图片 -->
    <e-chart
      :options="orgOptions"
      :auto-resize="true"
      :style="[heightStyle,picStyle]"
      class="my_inb"
    />
  </div>
  <!-- wrapper -->
</template>

<script>
export default {
  //属性
  props: ["platNormal"],
  //名称
  name: "myLineDiagram",
  orgOptions: {},
  //数据
  data() {
    //使用属性初始化图表
    var that = this;
    return {
      //样式
      heightStyle: {
        height: "70px"
      },
      picStyle: {
        width: "70px",
        verticalAlign: "top"
      },
      orgOptions : {
      legend: {
        height: "80px",
        width: "80px"
      },
      xAxis: {
        type: "category",
        show: false,
        data: this.platNormal.xAxis
      },
      yAxis: {
        type: "value",
        show: false
      },
      series: [
        {
          data: this.platNormal.data,
          type: "line",
          smooth: true,
          symbolSize: 7, //设定实心点的大小,
          itemStyle:{
            normal:{
                color: this.platNormal.bgColor,
                borderColor: this.platNormal.bgColor,
            }
          },
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: this.platNormal.colorStops,
              global: false // 缺省为 false
            }
          }
        }
      ],
      tooltip: {
        show: true,
        confine: true,
        backgroundColor: this.platNormal.bgColor
      }
    }
    };
  }
};
</script>

<style lang="scss" scoped>
.my-line-title{
  margin-top: 10px;
  font-size: 13px;
  color: #515a6e;
  font-weight: blod;
}

.my-line-unit{
  // color: #515a6e;
  font-weight: normal;
  font-size: 16px;
  padding-left:5px; 
  font-weight: bold;
}
</style>
