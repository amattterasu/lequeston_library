<template>
  <div class="bookList">
    <h1>BookList</h1>
    <BookItem />
    <BookItem />
    <BookItem />
  </div>
</template>

<script>

  import BookItem from './BookItem'

  export default {
    name: 'bookList',
    components: {
      BookItem
    },
    props: {}
    
  }
</script>

<style lang="scss">
</style>