<template>
  <div>
    <Row>
      <Col span="24">
        <div class="my_notice_item">
          <h3 class="my_notice_title">麻袋财富2018财报：营收超6亿 净利润1.23亿</h3>
          <p class="my_notice_content"> 
            近日，上海P2P平台麻袋财富在中国互联网金融协会——全国互联网金融登记披露服务平台（简称“协会信披系统”）上披露了2018年财报。财报显示，麻袋财富2018年营业收入（合并）为6.19亿元，同比... 查看全文
          </p>
          <p class="my_notice_date">2019-04-24</p>
        </div>
      
        <template  v-for="item in noticeList">
          <router-link :to="{name:'myNewsDetail',query:{id:item.id}}">
            <div class="my_notice_item">
              <h3 class="my_notice_title">{{item.title}}
                <Tag color="primary" class="my_notice_tag" >{{item.tag}}</Tag>
              </h3>
              <p class="my_notice_content"> 
                {{item.descp}}
              </p>
              <p class="my_notice_date">发布日期：{{item.date.substring(0,10)}}</p>
            </div>
          </router-link>
        </template>
     
        

         <el-pagination
         class="my-page"
          layout="prev, pager, next"
          :page-count="pageInfo.count"
          :page-size="pageInfo.pageNum"
          @current-change = "pageChange"
          :current-page="pageInfo.pageSize">
         </el-pagination>
      </Col>
    </Row>
  </div>
</template>

<script>
import axios from "axios";
import myPlatInfoDetail from '@/components/common/myPlatInfoDetail'
export default {
  //名称
  name: "myNotice",
  //注册组件
  components:{
    'my-plat-info-detail': myPlatInfoDetail
  },
  //数据
  data() {
    return {
      //v-chart
      noticeList: [],
      //v-chart
      pageInfo:{
        count: 0,
        pageNum: 1,
        pageSize: 2
      }
    }
  },
  //方法
  methods: {
    pageChange: function(event){
      var that = this;
      var url = "http://localhost:8083/post-api/v1/notice/page/"+ event +"/" + that.pageInfo.pageSize;
      this.getData(that,url);
    },
    getData: function(that,url){
      axios
        .get(url)
        .then(function(response) {
          let data = response.data;
          console.log(data)
          //设置运营平台数据
          that.pageInfo.count = parseInt(data.count/data.pageSize) + data.count%data.pageSize;
          that.noticeList = data.dataList;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  //生命周期
  beforeMount: function(){
    //数据获取
    var that = this;
    var url = "http://localhost:8083/post-api/v1/notice/page/"+ that.pageInfo.pageNum+"/" + that.pageInfo.pageSize;
    this.getData(that,url);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.my_notice_item{
  padding: 15px;
  padding-bottom: 30px;
  padding-top: 30px;
  border-bottom: 1px #e7e7e7 dashed;
}
.my_notice_title{
  color: #333;
  font-size: 16px;
  font-weight: 400;
}

.my_notice_content{
  margin-top: 15px;
  font-size: 14px;
  color: #666666;
  padding-bottom: 20px;
}

.my_notice_date{
  color: #999;
  font-size: 12px;
}

.my_notice_tag{
  float: right;
  margin-right: 25px;
}

.my-page{
  margin: 30px 20px 0px 20px;
}
</style>
