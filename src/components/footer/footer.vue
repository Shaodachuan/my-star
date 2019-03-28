<template>
  <!-- header -->
  <div class="global-fotter">
     this is footer
  </div>
</template>

<script>
export default {
  name: 'footer',
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

  .global-header {
    width: 100%;
    height: 85px;
    line-height: 85px;
    padding-left: 3%;
    padding-right: 1%;
    background-color: $background-color-white;
    box-shadow: 0 0 18px rgba(0,0,0,.07);
  }

  .logo img{
    vertical-align: middle;
  }

  .nav-bar{
    padding-left: 30px; 
  }

  .nav{
    display: inline-block;
  }

  .nav-item{
    // display: inline-block;
    margin: 0 20px;
    color: #333;
    font-weight: 700;
    cursor: pointer;
  }
</style>
