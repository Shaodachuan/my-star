<template>
  <div id="app">
    <!-- 导航nav -->
    <header-top></header-top>
    <!-- router-view -->
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header/header'
export default {
  name: 'App',
  components: {
    'header-top': header
  }
}
</script>

<style lang="scss">
  @import './style/reset.scss';
  @import './style/mixin.scss';
</style>

