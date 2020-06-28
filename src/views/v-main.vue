<template>
    <div class="v-main">  
      <Navbar />
      <vFilter />
      <Sorting />
      <BookList />
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import vFilter from '../components/vFilter'
import Sorting from '../components/Sorting'
import BookList from '../components/BookList'

  export default {
      name: 'vMain',
      components: {
        Navbar, 
        vFilter,
        Sorting,
        BookList
      },
      props: {},
      data: () => ({
      }),
      computed: {},
      methods: {},
      watch: {},
      mounted: () => {
      }
  }
</script>

<style lang="scss">
  .v-main {
    max-width: 720px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
  }
</style>