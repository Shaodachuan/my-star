<template>
  <!-- wrapper -->
  <div>
    <div class="my-con-wrap" v-for="item in dataList">
      <div class="my-con-logodiv">
         <Avatar class="my-con-logo" :src="item.logo" />
      </div>
      <div class="my-con-condiv">
        <h3 class="my-con-title">{{item.userName}}<span class="my-con-time">{{item.commentDate}}</span></h3>
        <p  class="my-con-p">{{item.commentContent}}</p>
      </div>
    </div>
  </div>
  <!-- wrapper -->
</template>

<script>
import axios from "axios";
export default {
  //名称
  name: 'myComment',
  //数据
  data () {
    return {
       dataList: []
    }
  },
  //生命周期
  beforeMount: function() {
    //请求数据
    var that = this;
    var url = "http://localhost:8083/plat-api/v1/plat/"+this.$route.query.id + "/commit";
     axios
      .get(url)
      .then(function(response) {
        let data = response.data;
        //设置运营平台数据
       that.dataList = data;
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
    //设计样式
  }
}
</script>

<style lang="scss" scoped>
.my-con-wrap{
  padding-bottom: 30px;
  padding-top: 30px;
  border-bottom: 1px #e7e7e7 dashed;
}

.my-con-logodiv{
  width: 60px;
  float: left;
  padding-right: 20px; 
  padding-left: 10px; 
  min-height: 60px;
}

.my-con-condiv{
  margin-left: 75px;
}

.my-con-title{
  color: #2f8bcd;
  font-size: 12px;
  font-weight: 400;
}

.my-con-time{
  padding-left: 20px; 
  color: #999;
  font-size: 12px;
  font-weight: 400;
}

.my-con-p{
  color: #333;
  padding-top: 15px;
  line-height: 1.7em;
  font-size: 12px;
  font-weight: 400;
  word-break: break-all;
}
</style>
