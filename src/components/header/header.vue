<template>
    <Header class="my-header">
      <Menu mode="horizontal" theme="light" active-name="1" class="my-menu">
        <router-link to="/">
          <img src="../../images/logo.png" class="layout-logo">
        </router-link>

        <MenuItem name="6" to="">
        </MenuItem>
        <MenuItem name="1" to="/grade">
            <span class="my-h-title">评级</span>
        </MenuItem>
        <MenuItem name="2"  to="/normal">
           <span class="my-h-title">平台</span>
        </MenuItem>
          <MenuItem name="3"  to="/flash">
             <span class="my-h-title">资讯公告</span>
          </MenuItem>
          <MenuItem name="4"  to="/platweibo">
             <span class="my-h-title">微博推特</span>
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

.my-h-title{
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  font-weight: 600;
}
</style>
