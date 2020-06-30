<template>
  <div id="app">
    <Navbar />
    <vMain />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import vMain from './views/v-main'

export default {
  name: 'App',
  components: {
    vMain,
    Navbar
  }
}
</script>

<style lang="scss">
</style>
