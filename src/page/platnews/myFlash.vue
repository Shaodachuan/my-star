<template>
  <div>
    <Row>
      <Col span="21" offset="1" >
        <h3 class="my_flash_time"><Tag type="dot" color="default" class="my_flash_time_tag">5/4 星期六</Tag></h3>
         
        <Timeline>
          <TimelineItem>
            <p class="my_flash_timeline_title">TokenGazer CEO 范宏达：Facebook 发币的相关投资分析
            </p>
            <p class="my_flash_timeline_content">ToeknGazer CEO 范宏达对 Facebook 发币的分析指出：Facebook 不但要建立一个区块链的转账和支付系统，还极有可能是一个身份验证和管理系统；在面对扩展性挑战上，Facebook 可能会采用全栈的系统化设计来最小化区块链需求；Facebook 发行的稳定币本身没有投资性，仍将为主流数字货币带来一定的溢出效应，但最大受益者将是 Facebook 可能借用注意力经济和社群经济效应激活自身用户。</p>
          </TimelineItem>
          <TimelineItem>
            <p class="my_flash_timeline_title">Decred 发布其闪电网络钱包 dcrlnd</p>
            <p class="my_flash_timeline_content">链闻消息，价值存储导向代币 Decred 发布其闪电网络钱包和节点软件 dcrlnd，并在 GitHub 发布代码以供体验。据 Block123.com 显示，Deccred 采用 PoW + PoS 混合机制，投资方有 Placeholder 和 Blue Yard 等。</p>
          </TimelineItem>
          <TimelineItem>
            <p class="my_flash_timeline_title">Cardano创始人Charles Hoskinson宣布成立区块链创企Atala</p>
            <p class="my_flash_timeline_content">5月4日下午，DGroup创始人、Bitfinex股东赵东在其微信朋友圈发布了Bitfinex最新的官方回复，内容如下： 1.IEO结束之后多长时间LEO上线？答复：会很快上线，iFinex&amp;Bitfinex的目标是在IEO结束后一周左右上线LEO。 2.距离5月10日只有6天时间，确定这是最终时间点吗？答复：目前iFinex就是按照这个时间点安排所有相关计划。 3.Bitfinex团队是否持有一定比例的LEO？如果有，是多少？答复：Bitfinex团队不持有LEO，全部分配给投资人。</p>
          </TimelineItem>
          <TimelineItem>
            <p class="my_flash_timeline_title">Ripple高管：有10家金融机构正在通过xRapid使用XRP进行跨境支付
</p>
            <p class="my_flash_timeline_content">据Invest In Blockchain消息，Ripple高管Marjan Delattine证实，与Ripple合作的10家金融机构正在通过Ripple的xRapid流动性解决方案使用XRP进行跨境支付。虽然这跟与RippleNet合作并使用xCurrent技术促进跨境交易的200多家金融机构的数字相去甚远，但这无疑是朝着正确的方向迈出了一步。此外，Delattine注意到，这10个合作伙伴正在积极使用XRP，而且其数量每天都在增加。</p>
          </TimelineItem>
          <TimelineItem>
            <p class="my_flash_timeline_title">印度加密货币行业人士：印度政府或无法完全禁止或限制使用加密货币</p>
            <p class="my_flash_timeline_content">据此前消息，印度经济事务部（DEA）、中央直接税局（CBDT）等多个政府部门组成的委员会均认为应该完全禁止发行、出售、购买各类加密货币，并关闭所有加密货币交易所。对此，印度加密和IT行业的某些成员认为，由于加密货币的去中心化特性，政府也许无法完全禁止或限制其使用。此外，禁止基于区块链的数字资产可能不符合国家最佳利益。（Crypto Globe）</p>
          </TimelineItem>
        </Timeline>
      </Col>
    </Row>
  </div>
</template>

<script>
import myPlatInfoDetail from "@/components/common/myPlatInfoDetail";
export default {
  //名称
  name: "myFlash",
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
.my_flash_time{
  margin-top: 20px;
  margin-bottom: 20px;
}

.my_flash_time_tag{
  font-size: 16px;
  font-weight: normal;
}

.my_flash_timeline_title {
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 20px;
}
.my_flash_timeline_content {
  padding-left: 5px;
  font-size: 13px;
  line-height: 26px;
}
</style>
