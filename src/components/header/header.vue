<template>
  <!-- header -->
  <div class="global-header">

      <!-- logo -->
      <router-link to="/" class="logo">
        <img src="../../images/logo.png" class="img-v-middle">
      </router-link>
      <!-- logo -->

      <!-- nav -->
      <div class="nav inb">
        <router-link to="/currency" class="nav-item title-active">行情</router-link>
        <router-link to="/platform" class="nav-item">平台</router-link>
        <router-link to="/notice" class="nav-item">平台公告</router-link>
        <router-link to="/information" class="nav-item">资讯</router-link>
        <router-link to="/weibo" class="nav-item">微博推特</router-link>
        <router-link to="/app" class="nav-item">App</router-link>
      </div>
      <!-- nav -->
  </div>
  <!-- header -->
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  @import '../../style/variables-base.scss';

  .global-header {
    $global-header: 85px;
    $global-padding: 3%;

    height: $global-header;
    line-height: $global-header;
    padding: 0 $global-padding;
    box-shadow: 0 0 18px rgba(0,0,0,.07);  

    //dao hang
    .nav{
      padding-left: 30px;

      .nav-item{
        @include title-common-mixin(0,20px,0,20px);
      }
    } 
  }
</style>
