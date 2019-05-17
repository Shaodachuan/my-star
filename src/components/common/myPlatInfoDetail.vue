<template>
  <!-- wrapper -->
  <div>
    <row>
      <Col span="12" >
        <div class="my-pt-logo my_inb">
          <img :src="platInfo.logo" style="max-width:160px;">
        </div>
        <Divider type="vertical" class="my-divider my_vat"/>
        <div class="my-pt-title my_inb my_tal my_pl10">
          <h2 class="my_pl2 my-pt-h1">{{platInfo.name}}
             <Tag color="primary" class="my-pt-tag">{{platInfo.tag}}</Tag>
          </h2>
          <span class="my-pt-uptime">{{platInfo.uptime}}</span><br>
          <span class="my-pt-location">{{platInfo.location}}</span>
        </div>
      </Col>
      <Col span="12">
        <div class="my-fl-right">
          <div class="my-platinfo-con">
            <span class="my-platinfo-con-title">综合评级</span> <span><b>{{platInfo.rank}}</b>名</span><br>
            <span class="my-platinfo-con-title">参考收益</span> <span>{{platInfo.profit}}%</span><br>
            <span class="my-platinfo-con-title">投资期限</span> <span>{{platInfo.investmentTerm}}月</span><br>
          </div>
          <Divider type="vertical" class="my-divider my_vat"/>
          <div class="my-platinfo-con my-platinfo-con2">
            <span class="my-platinfo-con-title">用户点评</span>  <span> {{platInfo.score}}</span><br>
            <span class="my-platinfo-con-title">昨日成交量</span> <span> {{platInfo.yesterdayTurnover}}万</span><br>
            <span class="my-platinfo-con-title" >昨日待还余额</span> <span>{{platInfo.yesterdayOutstandingBalance}}万</span><br>
          </div>
        </div>
      </Col>
    </row>
  </div>
  <!-- wrapper -->
</template>

<script>
import axios from "axios";
export default {
  //属性
  props: ['myName'],
  //名称
  name: 'myPlatInfoDetail',
  //数据
  data () {
    //初始化表格样式
    return {
      platInfo: {}
    }
  },
  //生命周期
  beforeMount: function() {
    var url = "http://localhost:8083/plat-api/v1/plat/" + this.$route.query.id + "/platInfo";
    var that = this;
     axios
      .get(url)
      .then(function(response) {
        let data = response.data;
        //设置运营平台数据
        that.platInfo = data;
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped>
//var
$logo-height: 90px;
$divider-height: 70px;

.my-pt-logo{
  width: 170px;
  height: $logo-height;
}

.my-divider{
  height: $divider-height;
}

.my-pt-title{
  width: 170px;
  height: $logo-height;
}

.my-pt-h1{
  font-size: 18px;
}

.my-pt-uptime,.my-pt-location{
  display: inline-block;
  margin-top: 2px;  
}

.my-pt-tag{
  margin-left: 4px; 
}

.my-fl-right{
  float: right;
}

.my-platinfo-con{
  display: inline-block;
  text-align: left;
}

.my-platinfo-con{
  padding-right: 10px;
}

.my-platinfo-con-title{
  display: inline-block;
  font-weight: bold;
  width: 90px;
}
</style>
