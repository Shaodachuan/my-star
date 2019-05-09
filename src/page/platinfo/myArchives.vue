<template>
  <!-- wrapper -->
  <div class="my-rec-wrap">
    <h1 class="my-rec-t"><Tag color="primary">实力资质</Tag></h1>
    <div class="my-rec-item">
      <h3 class="my-rec-title">注册资金</h3>
      <div class="my-rec-con">{{archives.registeredCapital}}</div>
    </div>
     <div class="my-rec-item">
      <h3 class="my-rec-title">银行存管</h3>
      <div class="my-rec-con">{{archives.bankDepository}}</div>
    </div>
     <div class="my-rec-item">
      <h3 class="my-rec-title">股权上市</h3>
      <div class="my-rec-con">{{archives.equityListing}}  &nbsp;</div>
    </div>
     <div class="my-rec-item">
      <h3 class="my-rec-title">融资记录</h3>
      <div class="my-rec-con">{{archives.financingRecord}}</div>
    </div>
     <div class="my-rec-item">
      <h3 class="my-rec-title">监管协会</h3>
      <div class="my-rec-con">{{archives.regulatoryAssociation}}</div>
    </div>
     <div class="my-rec-item">
      <h3 class="my-rec-title">ICP经营许可证</h3>
      <div class="my-rec-con">{{archives.icp}}</div>
    </div>

    <!-- 平台服务 -->
     <h1 class="my-rec-t my-rec-t2"><Tag color="error">平台服务</Tag></h1>
     <div class="my-rec-item">
      <h3 class="my-rec-title">自动投标</h3>
      <div class="my-rec-con">{{archives.automaticBidding}}</div>
    </div>
     <div class="my-rec-item">
      <h3 class="my-rec-title">债权转让</h3>
      <div class="my-rec-con">{{archives.assignmentLaims}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">投标保障</h3>
      <div class="my-rec-con">{{archives.tenderGuarantee}}</div>
    </div>
    <div class="my-rec-item">
      <h3 class="my-rec-title">保障模式</h3>
      <div class="my-rec-con">{{archives.supportMode}}</div>
    </div>
  </div>
  <!-- wrapper -->
</template>

<script>
import axios from "axios";
export default {
  //名称
  name: 'myArchives',
  //数据
  data () {
    return {
      archives: {}
    }
  },
  //生命周期
  beforeMount: function() {
    var that = this;
    var url = "http://localhost:8083/plat-api/v1/plat/"+this.$route.query.id + "/archvies";
     axios
      .get(url)
      .then(function(response) {
        let data = response.data;
        console.log(data);
        //设置运营平台数据
       that.archives = data;
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

.my-rec-t{
  margin-left: 30px;
}

.my-rec-t2{
  margin-top: 20px;
}
</style>
