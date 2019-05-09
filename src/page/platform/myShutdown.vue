<template>
  <div>
    <el-table
      :default-sort="{prop: 'date', order: 'descending'}"
      highlight-current-row
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column label="序号" sortable type="index" width="50"></el-table-column>
      <el-table-column prop="name" label="平台" sortable>
        <template slot-scope="scope">
          <a href="#">{{scope.row.name}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="questionTime" label="问题时间" sortable></el-table-column>
      <el-table-column prop="uptime" label="上线时间" sortable></el-table-column>
      <el-table-column prop="registeredCapital" label="注册资本(万元)" sortable></el-table-column>
      <el-table-column prop="region" label="地区" sortable></el-table-column>
      <el-table-column prop="eventType" label="事件类型" sortable></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //名称
  name: "myShutdown",
  //数据
  data() {
    return { 
      tableData: []
    }
  },
   //声明周期
  beforeMount: function() {
    var that = this;
    axios
      .get("http://localhost:8083/plat-api/v1/plat/shutdown/list")
      .then(function(response) {
        let data = response.data;
        that.tableData = data;
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
