<template>
 <div class="container">
    <!-- main block -->
    <div class="main">
      <!-- top -->
      <div class="market-total main-block-white">
        <div class="market-item">
           <!-- icon -->
            <img data-v-39f93fdc="" src="https://cdn.mytoken.org/allint@3x.png" alt="" class="market-icon">
          <!-- market right-->
          <div class="market-right">
            <h3 class="market-title">全球总市值</h3><br>
            <div class="market-money">¥11,207.46亿</div><br>
            <div class="market-percent">2.31%</div><br>
          </div>
           <!-- market left -->   
        </div>

        <div class="market-item">
           <!-- icon -->
            <img data-v-39f93fdc="" src="https://cdn.mytoken.org/allint@3x.png" alt="" class="market-icon">
          <!-- market right-->
          <div class="market-right">
            <h3 class="market-title">全球总市值</h3><br>
            <div class="market-money">¥11,207.46亿</div><br>
            <div class="market-percent">2.31%</div><br>
          </div>
           <!-- market left -->   
        </div>

        <div class="market-item">
           <!-- icon -->
            <img data-v-39f93fdc="" src="https://cdn.mytoken.org/allint@3x.png" alt="" class="market-icon">
          <!-- market right-->
          <div class="market-right">
            <h3 class="market-title">全球总市值</h3><br>
            <div class="market-money">¥11,207.46亿</div><br>
            <div class="market-percent">2.31%</div><br>
          </div>
           <!-- market left -->   
        </div>
      </div>
      <!-- bottom -->
      <div class="part-currency main-block-white">
         <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
      </div>
    </div>

    <!-- aside block -->
    <div class="aside">
      <!-- part-app -->
      <div class="part-app main-block-white">
        <img src="../../images/app.jpg" alt="">
      </div>

      <!--  part-announcement -->
      <div class="part-announcement main-block-white">
        <div class="part-title-box">
          <a href="" class="part-title">资讯</a>
          <a href="" class="part-title">交易所公告</a>
        </div>
        <div class="part-news">
          <div class="news-box">
            <div class="part-news-left">
              <div class="part-news-cons">奢侈品集团LVMH将推出区块链溯源平台Aura，提供奢侈品追踪和真伪验证服务</div>
              <div class="source-box">
                <img src="../../images/part-news-icon.jpg" alt="" class="part-news-logo">
                <span class="part-news-author">互链脉搏</span>
                <span class="part-news-time">03-28 07:40</span>
              </div>
            </div>
            <img src="../../images/part-news-image.jpg" alt="" class="part-news-right">
          </div>
        </div>
        <div class="part-news">
          <div class="news-box">
            <div class="part-news-left">
              <div class="part-news-cons">奢侈品集团LVMH将推出区块链溯源平台Aura，提供奢侈品追踪和真伪验证服务</div>
              <div class="source-box">
                <img src="../../images/part-news-icon.jpg" alt="" class="part-news-logo">
                <span class="part-news-author">互链脉搏</span>
                <span class="part-news-time">03-28 07:40</span>
              </div>
            </div>
            <img src="../../images/part-news-image.jpg" alt="" class="part-news-right">
          </div>
        </div>
        <div class="part-news">
          <div class="news-box">
            <div class="part-news-left">
              <div class="part-news-cons">奢侈品集团LVMH将推出区块链溯源平台Aura，提供奢侈品追踪和真伪验证服务</div>
              <div class="source-box">
                <img src="../../images/part-news-icon.jpg" alt="" class="part-news-logo">
                <span class="part-news-author">互链脉搏</span>
                <span class="part-news-time">03-28 07:40</span>
              </div>
            </div>
            <img src="../../images/part-news-image.jpg" alt="" class="part-news-right">
          </div>
        </div>
        <div class="part-news">
          <div class="news-box">
            <div class="part-news-left">
              <div class="part-news-cons">奢侈品集团LVMH将推出区块链溯源平台Aura，提供奢侈品追踪和真伪验证服务</div>
              <div class="source-box">
                <img src="../../images/part-news-icon.jpg" alt="" class="part-news-logo">
                <span class="part-news-author">互链脉搏</span>
                <span class="part-news-time">03-28 07:40</span>
              </div>
            </div>
            <img src="../../images/part-news-image.jpg" alt="" class="part-news-right">
          </div>
        </div>
        <div class="part-news">
          <div class="news-box">
            <div class="part-news-left">
              <div class="part-news-cons">奢侈品集团LVMH将推出区块链溯源平台Aura，提供奢侈品追踪和真伪验证服务</div>
              <div class="source-box">
                <img src="../../images/part-news-icon.jpg" alt="" class="part-news-logo">
                <span class="part-news-author">互链脉搏</span>
                <span class="part-news-time">03-28 07:40</span>
              </div>
            </div>
            <img src="../../images/part-news-image.jpg" alt="" class="part-news-right">
          </div>
        </div>
        <div class="part-news">
          <div class="news-box">
            <div class="part-news-left">
              <div class="part-news-cons">奢侈品集团LVMH将推出区块链溯源平台Aura，提供奢侈品追踪和真伪验证服务</div>
              <div class="source-box">
                <img src="../../images/part-news-icon.jpg" alt="" class="part-news-logo">
                <span class="part-news-author">互链脉搏</span>
                <span class="part-news-time">03-28 07:40</span>
              </div>
            </div>
            <img src="../../images/part-news-image.jpg" alt="" class="part-news-right">
          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
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
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../style/mixin.scss';
  @import '../../style/variables-base.scss';

  .container{
    color: rebeccapurple;
    width: 1280px;
    margin: 0 auto ;
    padding-top: 15px;
  }

  .main{
    display: inline-block;
    width: 930px;
  }

  .main-block-white{
    background-color: white;  
  }

  .market-total{
    height: 123px;
  }

  .market-item{
    display: inline-block;
    width: 307px;
    height: 123px;
    position: relative;
  }

  .market-icon{
    position: absolute;
    top: 45px;
    left: 30px;
    display: inline-block;
    width: 30px;
    height: 30px;
  }

  .market-right{
    box-sizing: border-box;
    margin-left: 70px;
    display: inline-block;
    height: 123px;
    padding: 20px 0px;
  }
  
  .market-title{
    font-weight: 400;
    color: #333;
  }

  .market-money{
    font-size: 24px;
    font-weight: 700;
    color: #333;
  }

  .market-percent{
    font-size: 16px;
    display: inline-block;
    position: relative;
  }
 
 .part-currency{
   margin-top: 20px;
 }


.aside{
  float: right;
  width: 330px;
  height: 300px;

}

.part-app{
  height: 123px;
}

.part-app img{
  height: 123px;
}

.part-announcement{
  margin-top: 20px;
}

.part-title-box{
  height: 58px;
  line-height: 58px;
  border-bottom: 1px solid #eff3f5;
}

.part-title{
  margin-left: 25px;
  font-size: 14px;
  color: #333;
  font-weight: 700;
}

.part-news{
  width: 330px;
}

.news-box{
  height: 118px;
  padding: 14px;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid #eff3f5;
}

.part-news-left{
  width: 222PX;
}

.part-news-cons{
  height: 63px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
}

.source-box{
  margin-top: 5px;
}

.part-news-logo{
  vertical-align: middle;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.part-news-author,.part-news-time{
    margin-left: 10px;
    color: #999;
    cursor: pointer;
}

.part-news-right{
  position: absolute;
  right: 10px;
  top: 30px;
  width: 80px;
  height: 50px;
  border-radius: 3px;
}

</style>
