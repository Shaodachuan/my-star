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
        <div class="my_inform_item">
          <div class="my_inform_pic_wrap">
            <img src="https://cdn.mytoken.org/173fbaf72dc0b1956e9a76fbd1f8f4ab" width="180px" height="135px">
          </div>
          <div class="my_inform_txt_wrap">
            <h3 class="my_inform_title">比特币再创2019年新高，4大利好消息推动其冲击6000美元</h3>
            <p class="my_inform_date">发布时间: 2019-05-04</p>
            <p class="my_inform_desc">Facebook、美国第二大互联网券商TD Ameritrade、ErisX、Bakkt、E-Trade…大型科技金融机构纷纷传出重大进展，加密货币投资者的信心大受鼓舞。</p>
          </div>
        </div>
        <div class="my_inform_item">
          <div class="my_inform_pic_wrap">
            <img src="https://cdn.mytoken.org/6dce713b31cffa1b6e08e5e22ef8bcaa" width="180px" height="135px">
          </div>
          <div class="my_inform_txt_wrap">
            <h3 class="my_inform_title">比特币再创2019年新高，4大利好消息推动其冲击6000美元</h3>
            <p class="my_inform_date">发布时间: 2019-05-04</p>
            <p class="my_inform_desc">Facebook、美国第二大互联网券商TD Ameritrade、ErisX、Bakkt、E-Trade…大型科技金融机构纷纷传出重大进展，加密货币投资者的信心大受鼓舞。</p>
          </div>
        </div>
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
        <div class="my_inform_item">
          <div class="my_inform_pic_wrap">
            <img src="https://cdn.mytoken.org/67ce3880e4c5fad74073b33ce1d1d62a" width="180px" height="135px">
          </div>
          <div class="my_inform_txt_wrap">
            <h3 class="my_inform_title">比特币再创2019年新高，4大利好消息推动其冲击6000美元</h3>
            <p class="my_inform_date">发布时间: 2019-05-04</p>
            <p class="my_inform_desc">Facebook、美国第二大互联网券商TD Ameritrade、ErisX、Bakkt、E-Trade…大型科技金融机构纷纷传出重大进展，加密货币投资者的信心大受鼓舞。</p>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
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
    this.chartSettings = {
      roseType: "radius"
    };
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "刘小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      //v-chart
      chartData: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "1/1", 访问用户: 1393 },
          { 日期: "1/2", 访问用户: 3530 },
          { 日期: "1/3", 访问用户: 2923 },
          { 日期: "1/4", 访问用户: 1723 },
          { 日期: "1/5", 访问用户: 3792 },
          { 日期: "1/6", 访问用户: 4593 }
        ]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.my_inform_item{
  padding: 20px;
  position: relative;
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
</style>
