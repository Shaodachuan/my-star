<template>
  <Col span="12" offset="3">
    <!-- total -->
      <Card :bordered="false">
          <Row class="my_tac">
             <Col span="15">
              <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
            </Col>
            <Col span="8" class="my_pt30"> 
              <Row  class="my_pt10 my_pb10">
                  <my-plat-total :myContent="operationPlatform" myTitle="运营平台数量" mySrc="https://upload-images.jianshu.io/upload_images/8941567-0987d79b51f4058c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/48/format/webp"></my-plat-total>
              </Row>
              <Row class="my_pt10 my_pb10">
                  <my-plat-total :myContent="platformProblem" myTitle="问题平台数量"  mySrc="https://upload-images.jianshu.io/upload_images/8941567-be0d01a787015706.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/128/format/webp"></my-plat-total>
              </Row>
              <Row class="my_pt10">
                  <my-plat-total :myContent="newProblem" myTitle="新上榜平台数量" mySrc="https://upload-images.jianshu.io/upload_images/8941567-b116d0159855bd16.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/128/format/webp"></my-plat-total>
              </Row>
            </Col>
          </Row>
      </Card>
        <!-- total -->

        <!-- bottom -->
          <Card :bordered="false" class="my_mt20 my_pt10">  
            <Menu mode="horizontal" active-name="1">
                <MenuItem name="normal" to="/normal">
                    平台成交数据
                </MenuItem>
                <MenuItem name="transfer" to="/transfer">
                    转型及停业
                </MenuItem>
                <MenuItem   name="shutdown" to="/shutdown">
                   问题平台
                </MenuItem>
            </Menu>
            <router-view></router-view>
          </Card>
        <!-- bottom -->  
  </Col>
</template>

<script>
import myPlatTotal from '@/components/common/myPlatTotal'
import axios from "axios";
export default {
  //名称
  name: "myPlatForm",
  //注册组件
  components:{
    'my-plat-total': myPlatTotal
  },
  //数据
  data() {
     this.chartSettings = {
        roseType: 'radius'
      };
    return {
      operationPlatform: '-',
      newProblem: '-',
      platformProblem: '-',
      chartData: {
          columns: ['类型', '数量'],
          rows: [
            { '类型': '运营平台数量', '数量': 1393 },
            { '类型': '问题平台数量', '数量': 3530 },
            { '类型': '新上榜平台数量', '数量': 2923 }
          ]
        }
    }
  },
  //声明周期
  beforeMount: function(){
    var that = this;
     axios
      .get("http://localhost:8083/plat-api/v1/plat/total")
      .then(function(response) {
        let data = response.data;
        //设置数据
        that.operationPlatform = data.operationPlatform;
        that.newProblem = data.newProblem;
        that.platformProblem = data.platformProblem;
        //设置图表数据
        that.chartData.rows[0] = data.operationPlatform;
        that.chartData.rows[1] = data.platformProblem;
        that.chartData.rows[3] = data.newProblem;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
