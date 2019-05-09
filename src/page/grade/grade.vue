<template>
  <Col span="12" offset="3">
        <!-- total -->
          <Card :bordered="false">
              <Row class="my_tac my_pt30 my_pb30">
                <Col span="6">
                  <my-line-diagram myContent="1265" myTitle="运营平台数量"></my-line-diagram>
                </Col>
                <Col span="6">
                  <my-line-diagram myContent="1265" myTitle="运营平台数量"></my-line-diagram>
                </Col>
                <Col span="6">
                  <my-line-diagram myContent="1265" myTitle="运营平台数量"></my-line-diagram>
                </Col>
                 <Col span="6">
                  <my-line-diagram myContent="1265" myTitle="运营平台数量"></my-line-diagram>
                </Col>
              </Row>
          </Card>
        <!-- total -->

        <!-- bottom -->
          <Card :bordered="false" class="my_mt20 my_pt10">
            <el-table
             :default-sort = "{prop: 'date', order: 'descending'}"
              highlight-current-row
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                sortable
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                sortable
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                sortable
                label="地址">
              </el-table-column>
            </el-table>
          </Card>
        <!-- bottom -->
  </Col>
</template>

<script>
import myLineDiagram from '@/components/common/myLineDiagram'
export default {
  //名称
  name: "myStar",
  //注册组件
  components:{
    'my-line-diagram': myLineDiagram
  },
  //数据
  data() {
    
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
          }]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style>
.el-table::before{
  background-color: #fff !important;
}
</style>
