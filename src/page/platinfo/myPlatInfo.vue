<template>
  <Col span="12" offset="3">
    <!-- total -->
    <Card :bordered="false" class="my_pfc160">
      <Row class="my_tac my_pt30 my_pb30">
        <Col span="24">
          <my-plat-info-detail :myName="$route.query.id"></my-plat-info-detail>
        </Col>
      </Row>
    </Card>
    <!-- total -->

    <!-- bottom -->
    <Card :bordered="false" class="my_mt20 my_pt10">
      <Menu mode="horizontal" active-name="1">
        <MenuItem name="archives">
          <router-link :to="{name:'myArchives',query:{id:$route.query.id}}">平台概览</router-link>
        </MenuItem>
        <MenuItem name="data" >
           <router-link :to="{name:'myData',query:{id:$route.query.id}}">数据详情</router-link>
        </MenuItem>
        <MenuItem name="level">
            <router-link :to="{name:'myLevel',query:{id:$route.query.id}}">平台评级</router-link>
        </MenuItem>
        <MenuItem name="record">
           <router-link :to="{name:'myRecord',query:{id:$route.query.id}}">工商/备案</router-link>
        </MenuItem>
        <MenuItem name="comment">
          <router-link :to="{name:'myComment',query:{id:$route.query.id}}">用户点评</router-link>
        </MenuItem>
      </Menu>
      <router-view></router-view>
    </Card>
    <!-- bottom -->
  </Col>
</template>

<script>
import myPlatInfoDetail from "@/components/common/myPlatInfoDetail";
export default {
  //名称
  name: "myPlatInfo",
  //注册组件
  components: {
    "my-plat-info-detail": myPlatInfoDetail
  },
  //数据
  data() {
    return {
     
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$height: 160px;

.my_pfc160 {
  height: $height;
}
</style>
