<template>
    <div class="container">  
      <Selects />
      <Sorting />
      <BookList />
    </div>
</template>

<script>
import Selects from '../components/Filtration/Selects'
import Sorting from '../components/Sorting'
import BookList from '../components/Catalog/BookList'

export default {
  name: 'vMain',
  components: { 
    Selects,
    Sorting,
    BookList
  }
}
</script>

<style lang="scss">
  .btn {
    margin: 0 3px 3px 0;
  }
</style>