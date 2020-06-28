<template>
  <div id="app">
    <vMain />
  </div>
</template>

<script>

import vMain from './views/v-main'

export default {
  name: 'App',
  components: {
    vMain
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
