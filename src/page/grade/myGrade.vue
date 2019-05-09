<template>
  <Col span="12" offset="3">
    <!-- total -->
    <Card :bordered="false">
      <Row class="my_tac my_pt30 my_pb30">
        <Col span="6">
          <my-line-diagram :platNormal="platNormal"></my-line-diagram>
        </Col>
        <Col span="6">
          <my-line-diagram :platNormal="platTotal"></my-line-diagram>
        </Col>
        <Col span="6">
          <my-line-diagram :platNormal="platTrans"></my-line-diagram>
        </Col>
        <Col span="6">
          <my-line-diagram :platNormal="platProblem"></my-line-diagram>
        </Col>
      </Row>
    </Card>
    <!-- total -->

    <!-- bottom -->
    <Card :bordered="false" class="my_mt20 my_pt10">
      <el-table
        :default-sort="{prop: 'date', order: 'descending'}"
        highlight-current-row
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="ranking" label="排名" sortable></el-table-column>
        <el-table-column prop="name" label="平台" sortable>
           <template slot-scope="scope">
           <router-link :to="{name:'myPlatInfo',query:{id:scope.row.name}}">{{scope.row.name}} </router-link>
          </template>
        </el-table-column>
        <el-table-column prop="developmentIndex" label="指数" sortable></el-table-column>
        <el-table-column prop="uptime" label="上线" sortable></el-table-column>
        <el-table-column prop="location" label="城市" sortable ></el-table-column>
        <el-table-column prop="deal" label="成交" sortable></el-table-column>
        <el-table-column prop="popularity" label="人气" sortable></el-table-column>
        <el-table-column prop="compliance" label="合规" sortable></el-table-column>
        <el-table-column prop="brand" label="品牌" sortable></el-table-column>
        <el-table-column prop="dispersity" label="分散"sortable></el-table-column>
        <el-table-column prop="transparency" label="透明" sortable ></el-table-column>
      </el-table>
    </Card>
    <!-- bottom -->
  </Col>
</template>

<script>
import axios from "axios";
import myLineDiagram from "@/components/common/myLineDiagram";
export default {
  //名称
  name: "myGrade",
  //注册组件
  components: {
    "my-line-diagram": myLineDiagram
  },
  //数据
  data() {
    return {
      //正常运营数据
      platNormal: {
        fontStyle: {
          color: "#ed4014"
        },
        bgColor: "#ed4014",
        id: "normal",
        myTitle: "运营平台",
        myContent: "-",
        xAxis: [],
        data: [],
        colorStops: [
          {
            offset: 0,
            color: "#ed4014" // 0% 处的颜色
          },
          {
            offset: 0.5,
            color: "#ed4014" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#ed4014" // 100% 处的颜色
          }
        ]
      },
      platTotal: {
        fontStyle: {
          color: "#19be6b"
        },
        bgColor: "#19be6b",
        id: "normal",
        myTitle: "累计平台",
        myContent: "-",
        xAxis: [],
        data: [],
        colorStops: [
          {
            offset: 0,
            color: "#19be6b" // 0% 处的颜色
          },
          {
            offset: 0.5,
            color: "#19be6b" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#19be6b" // 100% 处的颜色
          }
        ]
      },
      platTrans: {
        fontStyle: {
          color: "#ff9900"
        },
        bgColor: "#ff9900",
        myTitle: "转型和停业平台",
        myContent: "-",
        xAxis: [],
        data: [],
        colorStops: [
          {
            offset: 0,
            color: "#ff9900" // 0% 处的颜色
          },
          {
            offset: 0.5,
            color: "#ff9900" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#ff9900" // 100% 处的颜色
          }
        ]
      },
      platProblem: {
        fontStyle: {
          color: "#2db7f5"
        },
        bgColor: "#2db7f5",
        myTitle: "累计问题平台",
        myContent: "-",
        xAxis: [],
        data: [],
        colorStops: [
          {
            offset: 0,
            color: "#2db7f5" // 0% 处的颜色
          },
          {
            offset: 0.5,
            color: "#2db7f5" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#2db7f5" // 100% 处的颜色
          }
        ]
      },
      tableData: []
    };
  },
  //运营平台数据
  onlinePlat: {},
  //声明周期
  beforeMount: function() {
    // `this` 指向 vm 实例
    var that = this;
    //获取数据 正常运行
    axios
      .get("http://localhost:8083/grade-api/v1/grade/total/正常")
      .then(function(response) {
        let data = response.data;
        //设置运营平台数据
        that.platNormal.myContent = data[2].count;
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          that.platNormal.xAxis.push(element.month);
          that.platNormal.data.push(element.count);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    //获取数据 累计
    axios
      .get("http://localhost:8083/grade-api/v1/grade/total/累计")
      .then(function(response) {
        let data = response.data;
        //设置运营平台数据
        that.platTotal.myContent = data[2].count;
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          that.platTotal.xAxis.push(element.month);
          that.platTotal.data.push(element.count);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    //获取数据 转型
    axios
      .get("http://localhost:8083/grade-api/v1/grade/total/转型")
      .then(function(response) {
        let data = response.data;
        //设置运营平台数据
        that.platTrans.myContent = data[2].count;
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          that.platTrans.xAxis.push(element.month);
          that.platTrans.data.push(element.count);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    //获取数据 问题
    axios
      .get("http://localhost:8083/grade-api/v1/grade/total/问题")
      .then(function(response) {
        let data = response.data;
        //设置运营平台数据
        that.platProblem.myContent = data[2].count;
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          that.platProblem.xAxis.push(element.month);
          that.platProblem.data.push(element.count);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
      //获取数据 问题
    axios
      .get("http://localhost:8083/grade-api/v1/grade/list")
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
 <style>
.el-table::before {
  background-color: #fff !important;
}
</style>
