<template>
  <Col span="12" offset="3">
    <!-- total -->
      <Card :bordered="false" class="my_pfc160">
          <Row class="my_tac my_pt30 my_pb30">
             <Col span="24">
              <my-plat-info-detail myContent="1265" myTitle="运营平台数量"></my-plat-info-detail>
            </Col>
          </Row>
      </Card>
        <!-- total -->

        <!-- bottom -->
          <Card :bordered="false" class="my_mt20 my_pt10">
            <Menu mode="horizontal" active-name="1">
                <MenuItem name="1" to="/">
                    信息概览
                </MenuItem>
                <MenuItem name="/data">
                    平台数据
                </MenuItem>
                <MenuItem name="/level">
                    平台评级
                </MenuItem>
                <MenuItem name="/record">
                    工商/备案
                </MenuItem>
                <MenuItem name="/comment">
                    用户点评
                </MenuItem>
            </Menu>
            <router-view></router-view>
          </Card>
        <!-- bottom -->  
  </Col>
</template>

<script>
import myPlatInfoDetail from '@/components/common/myPlatInfoDetail'
export default {
  //名称
  name: "myPlatWeibo",
  //注册组件
  components:{
    'my-plat-info-detail': myPlatInfoDetail
  },
  //数据
  data() {
     this.chartSettings = {
        roseType: 'radius'
      }
    return {
      
      tableData: [{
            date: '2016-05-02',
            name: '刘小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          //v-chart
          chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$height: 160px;

.my_pfc160{
  height: $height;
}
</style>
