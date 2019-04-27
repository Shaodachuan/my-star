<template>
  <div id="app layout">
    <Layout>
          <!-- header -->
            <my-header />
          <!-- header -->

          <!-- content -->
            <Content class="my-content">
              <Row :gutter="20">
                <!-- left -->
                  <router-view></router-view>
                <!-- left -->

                <!-- right -->
                  <Col span="5"> 
                    <Card>
                      <div style="min-height: 800px;">
                          8
                      </div>
                    </Card>
                  </Col>
                <!-- right --> 
              </Row>
            </Content>
          <!-- content -->
     
           

            <!-- footer -->
            <my-footer />
            <!-- footer -->
        </Layout>

         <!-- 导航nav -->
    <!-- <header-top></header-top> -->
    <!-- router-view -->
    <!-- <router-view/> --> 
  </div>
</template>

<script>
import header from '@/components/header/header'
import footer from '@/components/footer/footer'
export default {
  name: 'App',
  components: {
    'my-header': header,
    'my-footer': footer
  }
}
</script>

<style lang="scss">
@import './style/base.scss';
@import './style/variables.scss';

body{
  font-family:  $v_f_f_b;
}

.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.my-content{
  margin: 20px 0;
  padding: 0 50px;
}

.my-m-4{
  margin-top: 20px;
}
</style>

