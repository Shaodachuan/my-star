<template>
  <div id="layout">
    <Layout>
          <!-- header -->
            <my-header />
          <!-- header -->

          <!-- content -->
            <Content class="my-content">
              <Row :gutter="20">
                <!-- left -->
                  <router-view></router-view>
                <!-- left -->

                <!-- right -->
                  <Col span="5"> 
                  <div style="overflow:hidden">
                    <img src="./images/app.jpg" height="160px;">
                  </div>
                  <Card style="margin-top:17px;">
                    <div style="min-height: 800px;">
                      <Tabs value="name1">
                        <TabPane label="资讯" name="name1">
                          <div class="my-app-item">
                            <div class="my-app-inform">
                              <img src="https://cdn.mytoken.org/0c75baa25d01f5a0599960299be8b74b" style="width:120px;height:80px;border-radius:10px;">
                            </div>
                            <div class="my-app-inform-right">
                              <h3 class="my-app-inform-title">比特币再创2019年新高，4大利好消息推动其冲击6000美元</h3>
                              <p class="my-app-inform-date">发布时间: 2019-05-04</p>
                            </div>
                          </div>

                           <div class="my-app-item" v-for="item in imformationList">
                            <div class="my-app-inform">
                              <img :src="item.pic" style="width:120px;height:80px;border-radius:10px;">
                            </div>
                            <div class="my-app-inform-right">
                              <h3 class="my-app-inform-title">{{item.title}}</h3>
                              <p class="my-app-inform-date">发布时间:{{item.date.substring(0,10)}}</p>
                            </div>
                          </div>

                        </TabPane>
                        <TabPane label="公告" name="name2">
                          <div class="my-app-notice-item">
                            <h3 class="my-app-notice-title">麻袋财富2018财报：营收超6亿 净利润1.23亿</h3>
                            <p class="my-app-notice-descp"> 
                              近日，上海P2P平台麻袋财富在中国互联网金融协会——全国互联网金融登记披露服务平台（简称“协会信披系统”）上披露了2018年财报。财报显示，麻袋财富2018年营业收入（合并）为6.19亿元，同比... 查看全文
                            </p>
                            <p class="my-app-notice-date">发布日期：2019-04-24</p>
                          </div>

                          <div class="my-app-notice-item" v-for="item in noticeList">
                            <h3 class="my-app-notice-title">{{item.title}}</h3>
                            <p class="my-app-notice-descp"> 
                              {{item.descp}}
                            </p>
                            <p class="my-app-notice-date">发布日期：{{item.date.substring(0,10)}}</p>
                          </div>

                        </TabPane>
                      </Tabs>
                    </div>
                  </Card>
                  </Col>
                <!-- right --> 
              </Row>
            </Content>
          <!-- content -->
     
           

            <!-- footer -->
            <my-footer />
            <!-- footer -->
        </Layout>

         <!-- 导航nav -->
    <!-- <header-top></header-top> -->
    <!-- router-view -->
    <!-- <router-view/> --> 
  </div>
</template>

<script>
import axios from "axios";
import header from '@/components/header/header'
import footer from '@/components/footer/footer'
export default {
  name: 'App',
  components: {
    'my-header': header,
    'my-footer': footer
  },
   //数据
  data() {
    return {
      imformationList: [],
      //v-chart
      noticeList: []
    };
  },
  //生命周期
  beforeMount: function(){
    //数据inofrmation
    var that = this;
    var url = "http://localhost:8083/post-api/v1/information/page/1/5";
    axios
        .get(url)
        .then(function(response) {
          let data = response.data;
          //设置运营平台数据
          that.imformationList = data.dataList;
        })
        .catch(function(error) {
          console.log(error);
        });
    //公告信息
    url = "http://localhost:8083/post-api/v1/notice/page/1/3";
     axios
        .get(url)
        .then(function(response) {
          let data = response.data;
          console.log(data);
          //设置运营平台数据
          that.noticeList = data.dataList;
        })
        .catch(function(error) {
          console.log(error);
        });
  }
}
</script>

<style lang="scss">
@import './style/base.scss';
@import './style/variables.scss';
//设置字体
body{
  font-family:  $v_f_f_b;
}

.ivu-icon:before,
.ivu-icon:after {
    font-family: Ionicons !important;
}

.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

//设置中间
.my-content{
  margin: 35px 0;
  padding: 0 50px;
}

.my-app-inform{
  float: left;
}

.my-app-inform-right{
  margin-left: 130px; 
  position: relative;
  height: 80px;
}

.my-app-inform-title{
  font-size: 12px;
}

.my-app-inform-date{
  position: absolute;
  bottom: 0px;
  font-size: 12px;
}

.my-app-item{
  border-bottom: 1px #e7e7e7 dashed;
  padding-bottom:15px; 
  padding-top: 15px;
}

.my-app-item:first-of-type{
  padding-top: 5px;
}

.my-app-item:last-of-type{
 border-bottom: 0px;
}

.my-app-notice-title{
  font-size: 14px;
}

.my-app-notice-descp{
  margin-top: 5px;
  font-size: 12px;
}

.my-app-notice-date{
  margin-top: 5px;
  font-size: 12px;
}

.my-app-notice-item{
   border-bottom: 1px #e7e7e7 dashed;
   padding-bottom:15px; 
  padding-top: 15px;
}

.my-app-notice-item:first-of-type{
  padding-top: 5px;
}

.my-app-notice-item:last-of-type{
 border-bottom: 0px;
}
</style>

