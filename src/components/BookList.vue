<template>
  <div class="row row-cols-1 row-cols-md-3 pt-3 bookList">
    <BookItem 
      v-for="book in (favoritesMode ? favoritesBooks : allBooks)"
      :key="book.id"
      :book="book"
      @addFavorites="addFavorites"
      @deleteFavorites="deleteFavorites"
      @ratingUp="ratingUp"
      @ratingDown="ratingDown"
    />
    {{favoritesBooks}}
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import BookItem from './BookItem'

  export default {
    name: 'bookList',
    components: {
      BookItem
    },
    computed: mapGetters(['allBooks', 'favoritesBooks', 'favoritesMode']),
    methods: {
      ...mapActions([
        'fetchBooks', 
        'addToFavorites', 
        'deleteFromFavorites',
        'ratingIncrement',
        'ratingDecrement'
      ]),
      addFavorites(book) {
        this.addToFavorites(book)
      },
     deleteFavorites(id) {
      this.deleteFromFavorites(id)
     },
     ratingUp(id) {
       this.ratingIncrement(id)
     },
     ratingDown(id) {
       this.ratingDecrement(id)
     }
    },
    async mounted() {
      this.fetchBooks()
    } 
  }
</script>

<style lang="scss">
</style>