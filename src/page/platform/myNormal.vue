<template>
  <div>
    <el-table
      :default-sort="{prop: 'date', order: 'descending'}"
      highlight-current-row
      :data="tableData"
      style="width: 100%"
      size='small'
    >
      <el-table-column label="序号" sortable type="index" width="50"></el-table-column>
      <el-table-column prop="name" label="平台" sortable>
        <template slot-scope="scope">
          <router-link :to="{name:'myArchives',query:{id:scope.row.name}}">{{scope.row.name}} </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="volume" label="成交量(万元)" sortable></el-table-column>
      <el-table-column prop="profit" label="平均参考收益率(%)" sortable></el-table-column>
      <el-table-column prop="borrowingTime" label="平均借款期限(月)" sortable></el-table-column>
      <el-table-column prop="notRepay" label="还余额(万元)" sortable></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //名称
  name: "myNormal",
  //数据
  data() {
    return {
      tableData: []
    };
  },
  //声明周期
  beforeMount: function() {
    var that = this;
    axios
      .get("http://localhost:8083/plat-api/v1/plat/normal/list")
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
