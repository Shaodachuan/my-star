<template>
  <!-- wrapper -->
  <div class="my-rec-wrap">
    <div class="my-rec-item">
      <h3 class="my-rec-title">公司名称</h3>
      <div class="my-rec-con">{{record.corporateName}}</div>
    </div>
     <div class="my-rec-item">
      <h3 class="my-rec-title">统一社会信用代码</h3>
      <div class="my-rec-con">{{record.unifiedSocialCreditCode}}</div>
    </div>
     <div class="my-rec-item">
      <h3 class="my-rec-title">法人代表</h3>
      <div class="my-rec-con">{{record.corporateRepresentative}}</div>
    </div>
     <div class="my-rec-item">
      <h3 class="my-rec-title">注册资本</h3>
      <div class="my-rec-con">{{record.registeredCapital}}</div>
    </div>
     <div class="my-rec-item">
      <h3 class="my-rec-title">公司类型</h3>
      <div class="my-rec-con">{{record.companyType}}</div>
    </div>
     <div class="my-rec-item">
      <h3 class="my-rec-title">实缴资本</h3>
      <div class="my-rec-con">{{record.paidInCapital}}</div>
    </div>
     <div class="my-rec-item">
      <h3 class="my-rec-title">注册地址</h3>
      <div class="my-rec-con">{{record.registeredAddress}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">开业日期</h3>
      <div class="my-rec-con">{{record.openingDate}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">登记状态</h3>
      <div class="my-rec-con">{{record.registrationStatus}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">营业期限</h3>
      <div class="my-rec-con">{{record.businessTerm}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">登记机关</h3>
      <div class="my-rec-con">{{record.registrationAuthority}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">核准日期</h3>
      <div class="my-rec-con">{{record.approvalDate}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">备案域名</h3>
      <div class="my-rec-con">{{record.recordDomainName}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">备案时间</h3>
      <div class="my-rec-con">{{record.filingTime}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">备案单位名称</h3>
      <div class="my-rec-con">{{record.recordingUnit}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">备案单位性质</h3>
      <div class="my-rec-con">{{record.recordingUnitState}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">ICP备案号</h3>
      <div class="my-rec-con">{{record.icpRecording}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">ICP经营许可证</h3>
      <div class="my-rec-con">{{record.icpLicense}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">平台曾用名</h3>
      <div class="my-rec-con">{{record.nameUesd}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">经营范围</h3>
      <div class="my-rec-con">{{record.businessScope}}</div>
    </div>
  </div>
  <!-- wrapper -->
</template>

<script>
import axios from "axios";
export default {
  //名称
  name: 'myRecord',
  //数据
  data () {
    return {
      record: {}
    }
  },
  //生命周期
  beforeMount: function() {
    var that = this;
    var url = "http://localhost:8083/plat-api/v1/plat/"+this.$route.query.id + "/record";
    console.log("你好")
    console.log(url);
     axios
      .get(url)
      .then(function(response) {
        let data = response.data;
        //设置运营平台数据
       that.record = data;
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped>
.my-rec-wrap{
  padding-top: 20px;
}

.my-rec-item{
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px; 
  padding-right: 30px; 
  border-bottom: 1px #e7e7e7 dashed;
}

.my-rec-title{
  color: #333;
  width: 150px;
  float: left;
  font-size: 14px;
  font-weight: blod;
}

.my-rec-con{
  margin-left: 150px;
}
</style>
