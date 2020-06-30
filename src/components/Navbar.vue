<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Lequeston</a>
    <input class="form-control" 
      type="text" 
      placeholder="Поиск"
      @input="searchBook"
    >
     <button class="btn btn-secondary" 
        type="button" 
        @click="this.changeMode"
      >
       {{ favoritesMode ? 'Общее' : 'Избранное' }}
    </button>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'navbar',
  computed: {
    ...mapGetters(['favoritesMode', 'books']),
  },
  methods: {
    ...mapActions(['changeMode', 'searchByFiltered']),
    searchBook(e) {
      this.searchByFiltered(e.target.value)
    }
  }
}
</script>
