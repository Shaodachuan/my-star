<template>
  <div>
    <Row>
      <Col span="24">
        <div class="my_inform_item">
          <div class="my_inform_pic_wrap">
            <img src="https://cdn.mytoken.org/0c75baa25d01f5a0599960299be8b74b" width="180px" height="135px">
          </div>
          <div class="my_inform_txt_wrap">
            <h3 class="my_inform_title">比特币再创2019年新高，4大利好消息推动其冲击6000美元</h3>
            <p class="my_inform_date">发布时间: 2019-05-04</p>
            <p class="my_inform_desc">Facebook、美国第二大互联网券商TD Ameritrade、ErisX、Bakkt、E-Trade…大型科技金融机构纷纷传出重大进展，加密货币投资者的信心大受鼓舞。</p>
          </div>
        </div>
       

       <template  v-for="item in informationList">
         <router-link :to="{name:'myInformationDetail',query:{id:item.id}}">
           <div class="my_inform_item" v-for="item in informationList">
            <div class="my_inform_pic_wrap">
              <img src="https://cdn.mytoken.org/173fbaf72dc0b1956e9a76fbd1f8f4ab" width="180px" height="135px">
            </div>
            <div class="my_inform_txt_wrap">
              <h3 class="my_inform_title">{{item.title}}</h3>
              <p class="my_inform_date">发布时间: {{item.date.substring(0,10)}}</p>
              <p class="my_inform_desc">{{item.descp}}</p>
            </div>
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
import myPlatInfoDetail from "@/components/common/myPlatInfoDetail";
export default {
  //名称
  name: "myInformation",
  //注册组件
  components: {
    "my-plat-info-detail": myPlatInfoDetail
  },
  //数据
  data() {
    return {
      //v-chart
      informationList: [],
      //v-chart
      pageInfo:{
        count: 0,
        pageNum: 1,
        pageSize: 2
      },
      
    };
  },
  //方法
  methods: {
    pageChange: function(event){
      var that = this;
      var url = "http://localhost:8083/post-api/v1/information/page/"+ event +"/" + that.pageInfo.pageSize;
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
          that.informationList = data.dataList;
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
    var url = "http://localhost:8083/post-api/v1/information/page/"+ that.pageInfo.pageNum+"/" + that.pageInfo.pageSize;
    this.getData(that,url);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.my_inform_item{
  padding: 20px;
  position: relative;
  color: #515a6e;
}
.my_inform_pic_wrap{
  float: left;;
  background: yellow;
  height: 135px;
  width: 180px;
  border-radius: 10px;
}
.my_inform_pic_wrap img{
  border-radius: 10px;
}
.my_inform_txt_wrap{
  padding-top: 5px;
 margin-left: 200px;
}
.my_inform_title{
  font-weight: bolder;
  font-size: 16px;
}
.my_inform_date{
  font-size: 14px;
  margin-top: 10px;
}
.my_inform_desc{
  margin-top: 10px;
  font-size: 14px;
  line-height: 25px;
  font-weight: bold;
}
.my-page{
  margin: 30px 20px 0px 20px;
}

.my_inform_item{
  
}
</style>
