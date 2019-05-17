<template>
  <!-- wrapper -->
  <div>
    <div class="my-lev-pic">
      <ve-radar :data="chartData" :legend-visible="false" :settings="chartSettings"></ve-radar>
    </div>
    <div class="my-lev-con">
      <p class="my-lev-title">
        2019年03月 发展指数：
        <span class="my-lev-score">{{level.devRate}}</span> 评级排名：
        <span class="my-lev-score">{{level.ranking}}</span> 位
      </p>
      <div class="my-lev-items">
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{level.volumeTurnover}}</p>
          <p class="my-lev-item-content">成交积分</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{level.outstandingBalance}}</p>
          <p class="my-lev-item-content">人气积分</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{level.referenceRateOfReturn }}</p>
          <p class="my-lev-item-content">技术积分</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{level.averageBorrowingPeriod}}</p>
          <p class="my-lev-item-content">合规积分</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{level.numberOfInvestors }}</p>
          <p class="my-lev-item-content">杠杆积分</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{level.perInvestmentAmount }}</p>
          <p class="my-lev-item-content">品牌</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{level.waitForInvestment}}</p>
          <p class="my-lev-item-content">透明度</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{level.borrowersNumber}}</p>
          <p class="my-lev-item-content">分散度</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{level.perLoanAmount  }}</p>
          <p class="my-lev-item-content">流动性</p>
        </div>
      </div>
    </div>
  </div>
  <!-- wrapper -->
</template>

<script>
import axios from "axios";
export default {
  //名称
  name: "myLevel",
  //数据
  data() {
     this.chartSettings={
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "red" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "blue" // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        }
      };
    return {
     
      //样式
      level: {},
      chartData: {
        columns: [
          "名称",
          "成交",
          "合规",
          "人气",
          "技术",
          "杠杆",
          "流动",
          "透明",
          "分散",
          "品牌"
        ],
        rows: [
          {
            名称: "1/1",
            成交: 0,
            合规: 0,
            人气: 0,
            技术: 0,
            杠杆: 0,
            流动: 0,
            透明: 0,
            分散: 0,
            品牌: 0
          }
        ]
      }
    };
  },
  //生命周期
  beforeMount: function() {
    // data
    var that = this;
    var url = "http://localhost:8083/plat-api/v1/plat/"+this.$route.query.id + "/level";
    console.log(url);
     axios
      .get(url)
      .then(function(response) {
        let data = response.data;
        console.log(data);
        //设置运营平台数据
        that.level = data;
        //设置图表数据
        that.chartData.rows[0].名称 = data.name;
        that.chartData.rows[0].成交 = data.volumeTurnover;
        that.chartData.rows[0].合规 = data.averageBorrowingPeriod;
        that.chartData.rows[0].人气 = data.outstandingBalance;
        that.chartData.rows[0].技术 = data.referenceRateOfReturn;
        that.chartData.rows[0].杠杆 = data.numberOfInvestors;
        that.chartData.rows[0].流动 = data.perLoanAmount;
        that.chartData.rows[0].透明 = data.waitForInvestment;
        that.chartData.rows[0].分散 = data.borrowersNumber;
        that.chartData.rows[0].品牌 = data.perInvestmentAmount;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
.my-lev-pic {
  float: left;
  width: 300px;
  margin-left: 30px;
}

.my-lev-con {
  margin-left: 370px;
  padding-top: 70px;
  padding-right: 40px;
}

.my-lev-title {
  font-size: 12px;
  line-height: 1.5;
  color: #666;
  font-weight: normal;
  padding-bottom: 30px;
  border-bottom: 1px #e7e7e7 dashed;
}

.my-lev-score {
  font-size: 24px;
  padding-right: 2px;
  padding-left: 2px;
  font-weight: 900;
  color: #333;
}

.my-lev-item {
  box-sizing: border-box;
  display: inline-block;
  width: 100px;
  position: relative;
  border-bottom: 1px dashed #e7e7e7;
  padding-bottom: 20px;
  padding-top: 20px;
}

.my-lev-item-content:after {
  content: "";
  position: absolute;
  left: 80px;
  top: 20px;
  height: 70px;
  width: 1px;
  border-right: 1px #e7e7e7 dashed;
}

.my-lev-item-title {
  font-size: 24px;
  font-weight: 400;
  color: #333;
  margin-bottom: 10px;
}

.my-lev-item-content {
  font-size: 14px;
  color: #999;
  line-height: 1.5;
}
</style>
