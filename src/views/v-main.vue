<template>
    <div class="container">  
      <vFilter />
      <Sorting />
      <BookList />
    </div>
</template>

<script>
import vFilter from '../components/vFilter'
import Sorting from '../components/Sorting'
import BookList from '../components/BookList'

  export default {
      name: 'vMain',
      components: { 
        vFilter,
        Sorting,
        BookList
      },
      props: {},
      data: () => ({}),
      computed: {},
      methods: {},
      watch: {},
      mounted: () => {}
  }
</script>

<style lang="scss">
  .btn {
    margin: 0 3px 3px 0;
  }
</style>