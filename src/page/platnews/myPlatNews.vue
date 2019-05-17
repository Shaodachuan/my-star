<template>
  <Col span="12" offset="3">
        <!-- bottom -->
          <Card :bordered="false" class="my_pt10">
            <Menu mode="horizontal" active-name="1">
                <MenuItem name="flash" to="/flash">
                    快讯
                </MenuItem>
                <MenuItem name="information" to="/information">
                    资讯
                </MenuItem>
                <MenuItem   name="notice" to="/notice">
                    P2P平台公告
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
  name: "myPlatNews",
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
</style>
