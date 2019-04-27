<template>
    <Header class="my-header">
      <Menu mode="horizontal" theme="light" active-name="1" class="my-menu">
        <router-link to="/">
          <img src="../../images/logo.png" class="layout-logo">
        </router-link>

        <MenuItem name="6" to="https://www.baidu.com">
        </MenuItem>
        <MenuItem name="1" to="/grade">
            评级
        </MenuItem>
          <MenuItem name="2">
              Item 2
          </MenuItem>
          <MenuItem name="3">
              Item 3
          </MenuItem>
          <MenuItem name="4">
              Item 4
          </MenuItem>
 
      </Menu>
    </Header>


 
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      //style

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.layout-logo{
    height: 45px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 20px;
    left: 20px;
}


.my-header{
  height: 80px;
  background-color: #fff;
  box-shadow: 0 2px 3px 2px rgba(0,0,0,.1);
  overflow: hidden;
}

.my-menu{
  height: 85px;
  line-height: 85px;
}

.my-logo{
  height: 50px;
}


</style>
