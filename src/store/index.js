import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    favorites: [],
    favoritesMode: false
  },
  mutations: {
    setBooks: (state, books) => {
      state.books = books
    },
    setBookToFavorites: (state, book) => {
      state.favorites.push(book.id)
      state.books.map(el => el.id === book.id ? el.favorite = true : el.favorite)
    },
    deleteBookFromFavorites: (state, id) => {
      state.favorites = state.favorites.filter(el => el !== id) 
      state.books.map(el => el.id === id ? el.favorite = false : el.favorite)
    },
    changeMode: (state) => {
      state.favoritesMode = !state.favoritesMode
    },
    increment: (state, id) => {
      state.books.map(el => el.id === id ? el.rating++ : el.rating)
    },
    decrement: (state, id) => {
      state.books.map(el => el.id === id ? el.rating-- : el.rating)
    }
  },
  actions: {
    async fetchBooks({commit}) {
      try {
        const res = await fetch('http://localhost:3000/books')
        const books = await res.json()

        commit('setBooks', books)
      } catch (e) {
        console.log(e) 
      }
    },
    addToFavorites({commit}, book) {
      commit('setBookToFavorites', book)
    },
    deleteFromFavorites({commit}, id) {
      commit('deleteBookFromFavorites', id)
    },
    changeMode({commit}) {
      commit('changeMode')
    },
    ratingIncrement({commit}, id) {
      commit('increment', id)
    },
    ratingDecrement({commit}, id) {
      commit('decrement', id)
    }
  },
  getters: {
    allBooks: (state) => state.books,
    favoritesBooks: (state) => {
      const res = []
      state.books.map(b => {
        state.favorites.map(id => {
          if (b.id === id) {
            res.push(b)
          }
        })
      })
      return res
    },
    favoritesMode: (state) => state.favoritesMode
  }
})
