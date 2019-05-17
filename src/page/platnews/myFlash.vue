<template>
  <div>
    <Row>
      <Col span="21" offset="1" >
        <h3 class="my_flash_time"><Tag type="dot" color="default" class="my_flash_time_tag">{{date}}</Tag></h3>
         
        <Timeline>
          <TimelineItem v-for="item in flashList">
            <p class="my_flash_timeline_title">{{item.title}}
            </p>
            <p class="my_flash_timeline_content">{{item.content}}</p>
          </TimelineItem>
        </Timeline>
         <el-pagination
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
export default {
  //名称
  name: "myFlash",
  //注册组件
  //数据
  data() {
    return {
      flashList: [],
      //v-chart
      pageInfo:{
        count: 0,
        pageNum: 1,
        pageSize: 2
      },
      date: new Date(),
    };
  },
  //方法
  methods: {
    pageChange: function(event){
      var that = this;
      var url = "http://localhost:8083/post-api/v1/flash/page/"+ event +"/" + that.pageInfo.pageSize;
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
          console.log(data.count)
          console.log(that.pageInfo.count)
          that.flashList = data.dataList;
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
    var url = "http://localhost:8083/post-api/v1/flash/page/"+ that.pageInfo.pageNum+"/" + that.pageInfo.pageSize;
    this.getData(that,url);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.my_flash_time{
  margin-top: 20px;
  margin-bottom: 20px;
}

.my_flash_time_tag{
  font-size: 16px;
  font-weight: normal;
}

.my_flash_timeline_title {
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 20px;
}
.my_flash_timeline_content {
  padding-left: 5px;
  font-size: 13px;
  line-height: 26px;
}
</style>
