<template>
  <div>
    <Row>
      <Col span="24">
        <div class="my_notice_item">
          <h3 class="my_notice_title">麻袋财富2018财报：营收超6亿 净利润1.23亿</h3>
          <p class="my_notice_content"> 
            近日，上海P2P平台麻袋财富在中国互联网金融协会——全国互联网金融登记披露服务平台（简称“协会信披系统”）上披露了2018年财报。财报显示，麻袋财富2018年营业收入（合并）为6.19亿元，同比... 查看全文
          </p>
          <p class="my_notice_date">2019-04-24</p>
        </div>
        <div class="my_notice_item">
          <h3 class="my_notice_title">麻袋财富2018财报：营收超6亿 净利润1.23亿
            <Tag color="primary" class="my_notice_tag" >平台公告</Tag>
          </h3>
          <p class="my_notice_content"> 
            近日，上海P2P平台麻袋财富在中国互联网金融协会——全国互联网金融登记披露服务平台（简称“协会信披系统”）上披露了2018年财报。财报显示，麻袋财富2018年营业收入（合并）为6.19亿元，同比... 查看全文
          </p>
          <p class="my_notice_date">2019-04-24</p>
        </div>
        <div class="my_notice_item">
          <h3 class="my_notice_title">麻袋财富2018财报：营收超6亿 净利润1.23亿</h3>
          <p class="my_notice_content"> 
            近日，上海P2P平台麻袋财富在中国互联网金融协会——全国互联网金融登记披露服务平台（简称“协会信披系统”）上披露了2018年财报。财报显示，麻袋财富2018年营业收入（合并）为6.19亿元，同比... 查看全文
          </p>
          <p class="my_notice_date">2019-04-24</p>
        </div>
        <div class="my_notice_item">
          <h3 class="my_notice_title">麻袋财富2018财报：营收超6亿 净利润1.23亿</h3>
          <p class="my_notice_content"> 
            近日，上海P2P平台麻袋财富在中国互联网金融协会——全国互联网金融登记披露服务平台（简称“协会信披系统”）上披露了2018年财报。财报显示，麻袋财富2018年营业收入（合并）为6.19亿元，同比... 查看全文
          </p>
          <p class="my_notice_date">2019-04-24</p>
        </div>
        <div class="my_notice_item">
          <h3 class="my_notice_title">麻袋财富2018财报：营收超6亿 净利润1.23亿</h3>
          <p class="my_notice_content"> 
            近日，上海P2P平台麻袋财富在中国互联网金融协会——全国互联网金融登记披露服务平台（简称“协会信披系统”）上披露了2018年财报。财报显示，麻袋财富2018年营业收入（合并）为6.19亿元，同比... 查看全文
          </p>
          <p class="my_notice_date">2019-04-24</p>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import myPlatInfoDetail from '@/components/common/myPlatInfoDetail'
export default {
  //名称
  name: "myNotice",
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
.my_notice_item{
  padding: 15px;
  padding-bottom: 30px;
  padding-top: 30px;
  border-bottom: 1px #e7e7e7 dashed;
}
.my_notice_title{
  color: #333;
  font-size: 16px;
  font-weight: 400;
}

.my_notice_content{
  margin-top: 15px;
  font-size: 14px;
  color: #666666;
  padding-bottom: 20px;
}

.my_notice_date{
  color: #999;
  font-size: 12px;
}

.my_notice_tag{
  float: right;
  margin-right: 25px;
}
</style>
