<template>
  <div>
    <div v-if="books.length" class="row row-cols-1 row-cols-md-3 pt-3">
      <BookItem 
        v-for="book in (favoritesMode ? favoritesBooks : books)"
        :key="book.id"
        :book="book"
        :months='months'
        @addFavorites="addFavorites"
        @deleteFavorites="deleteFavorites"
        @ratingUp="ratingUp"
        @ratingDown="ratingDown"
      />
    </div>
    <h3 class="mt-4 text-center" v-else>Книг нет...</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BookItem from './BookItem'

export default {
  data: () => ({
    months: [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря"
      ]
  }),
  name: 'bookList',
  components: {
    BookItem
  },
  computed: mapGetters(['favoritesBooks', 'favoritesMode', 'books']),
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
