<template>
  <!-- wrapper -->
  <div>
    <div class="my-lev-pic">
      <ve-radar :data="chartData" :legend-visible="false" :settings="chartSettings"></ve-radar>
    </div>
    <div class="my-lev-con">
      <p class="my-lev-title">
        <span class="my-lev-score">昨日核心数据</span>   更新时间：2019-05-09
      </p>
      <div class="my-lev-items">
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{detail.volumeTurnover}}</p>
          <p class="my-lev-item-content">成交量(万元)</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{detail.outstandingBalance}}</p>
          <p class="my-lev-item-content">待还余额(万元)</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{detail.referenceRateOfReturn}}</p>
          <p class="my-lev-item-content">参考收益率(%)</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{detail.averageBorrowingPeriod}}</p>
          <p class="my-lev-item-content">平均借款期限</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{detail.numberOfInvestors}}</p>
          <p class="my-lev-item-content">投资人数(人)</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{detail.perInvestmentAmount}}</p>
          <p class="my-lev-item-content">人均投资金额</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{detail.waitForInvestment}}</p>
          <p class="my-lev-item-content">待收投资人数</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{detail.borrowersNumber}}</p>
          <p class="my-lev-item-content">借款人数(人)</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{detail.perLoanAmount}}</p>
          <p class="my-lev-item-content">人均借款金额</p>
        </div>
         <div class="my-lev-item">
          <p class="my-lev-item-title">{{detail.borrowingStandardNumber}}</p>
          <p class="my-lev-item-content">借款标数(个)</p>
        </div>
        <div class="my-lev-item">
          <p class="my-lev-item-title">{{detail.numberToRepaid}}</p>
          <p class="my-lev-item-content">待还借款人数</p>
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
  name: "myData",
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
      detail: {},
      chartData: {
        columns: [
          "名称",
          "成交量",
          "投资人",
          "借款期",
          "参考收益率",
          "待还",
          "流入",
          "成交量a"
        ],
        rows: [
          {
            名称: "1/1",
            成交量: 0,
            投资人: 0,
            借款期: 0,
            参考收益率: 0,
            待还: 0,
            流入: 0,
            成交量a: 0
          }
        ]
      }
    };
  },
  //生命周期
  beforeMount: function() {
    // data
    var that = this;
    var url = "http://localhost:8083/plat-api/v1/plat/"+this.$route.query.id + "/detail";
     axios
      .get(url)
      .then(function(response) {
        let data = response.data;
        //设置运营平台数据
        that.detail = data;
        // //设置图表数据
        that.chartData.rows[0].名称 = data.name;
        that.chartData.rows[0].成交量 = data.volumeTurnover;
        that.chartData.rows[0].投资人 = data.numberOfInvestors;
        that.chartData.rows[0].借款期 = data.averageBorrowingPeriod;
        that.chartData.rows[0].参考收益率 = data.referenceRateOfReturn;
        that.chartData.rows[0].待还 = data.numberToRepaid;
        // that.chartData.rows[0].成交量a = data.volumeTurnover;
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
  font-size: 16px;
  padding-right: 10px;
  padding-left: 2px;
  font-weight: 700;
  color: #666;
}

.my-lev-item {
  display: inline-block;
  width: 100px;
  position: relative;
  border-bottom: 1px dashed #e7e7e7;
  padding-bottom: 15px;
  padding-top: 15px;
}


.my-lev-item-title {
  font-size: 15px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.my-lev-item-content {
  font-size: 12px;
  color: #999;
  line-height: 1.5;
}
</style>
