import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ALL_VALUES = "Всё";
const TYPE_FILTER_PUBLISHING = 'TYPE_FILTER_PUBLISHING'
const TYPE_FILTER_AUTHOR = 'TYPE_FILTER_AUTHOR'
const TYPE_FILTER_DATE = 'TYPE_FILTER_DATE'

export default new Vuex.Store({
  state: {
    books: [],
    filteredBooks: [],
    favorites: [],
    publisher: {option: ALL_VALUES, type: TYPE_FILTER_PUBLISHING},
    author: {option: ALL_VALUES, type: TYPE_FILTER_AUTHOR},
    year: {option: ALL_VALUES, type: TYPE_FILTER_DATE},
    favoritesMode: false,
    searchText: '',
    filters: [
      {
        name: "Выберите издательство",
        type: "TYPE_FILTER_PUBLISHING"
      },
      {
        name: "Выберите автора",
        type: "TYPE_FILTER_AUTHOR"
      },
      {
        name: "Выберите год",
        type: "TYPE_FILTER_DATE"
      }
    ]
  },
  mutations: {
    setBooks: (state, books) => state.books = state.filteredBooks = books,
    setBookToFavorites: (state, book) => {
      state.favorites.push(book.id)
      state.books.map(el => el.id === book.id ? el.favorite = true : el.favorite)
    },
    deleteBookFromFavorites: (state, id) => {
      state.favorites = state.favorites.filter(el => el !== id) 
      state.books.map(el => el.id === id ? el.favorite = false : el.favorite)
    },
    changeMode: state => state.favoritesMode = !state.favoritesMode,
    increment: (state, id) => state.books.map(el => el.id === id ? el.rating++ : el.rating),
    decrement: (state, id) => state.books.map(el => el.id === id ? el.rating-- : el.rating),
    sortedList: (state, typeSort) => {
      switch (typeSort) {
        case 'date': return state.books.sort((a, b) => {
          return new Date(a.date.year, a.date.month, a.date.day) - new Date(b.date.year, b.date.month, b.date.day)
        })
        case 'title': return state.books.sort((a, b) => {
          return (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1
        })
        case 'rating': return state.books.sort((a, b) => {
          return (a.rating < b.rating) ? 1 : -1
        })
        default: return state.books
      }
   },
   filter: (state, { option, type }) => {
    switch (type) {
      case TYPE_FILTER_PUBLISHING:  
        state.publisher = { option, type }
        break
      case TYPE_FILTER_AUTHOR:
        state.author = { option, type }
        break
      case TYPE_FILTER_DATE:
        state.year = { option, type }
      break
    }
   },
   searchByFiltered: (state, searchText) => state.searchText = searchText
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
    },
    sortedList({commit}, typeSort) {
      commit('sortedList', typeSort)
    },
    setFilter({commit}, {option, type}) {
      commit('filter', {option, type})
    },
    searchByFiltered({commit}, searchText) {
      commit('searchByFiltered', searchText)
    }
  },
  getters: {
    favoritesBooks: s => {
      const res = []
      s.filteredBooks.map(b => {
        s.favorites.map(id => {
          if (b.id === id) res.push(b)
        })
      })
      if (res && s.searchText) {
        return res.filter(b => {
          return b.title.toLowerCase().indexOf(s.searchText.toLowerCase()) > -1
        })
      } else return res
    },
    favoritesMode: s => s.favoritesMode,
    books: s => {
      s.filteredBooks = s.books
      s.books.forEach(b => {
        if (s.publisher.option !== ALL_VALUES) {
          s.filteredBooks = s.filteredBooks.filter(f => f.publisher === s.publisher.option)
        } 
        if (s.author.option !== ALL_VALUES) {
          s.filteredBooks = s.filteredBooks.filter(f => f.author === s.author.option)
        }
        if (s.year.option.toString() !== ALL_VALUES) {
          s.filteredBooks = s.filteredBooks.filter(f => f.date.year === s.year.option)
        }  
      })
      if (s.searchText) {
        return s.filteredBooks.filter(b => {
          return b.title.toLowerCase().indexOf(s.searchText.toLowerCase()) > -1
        })
      }
      return s.filteredBooks
    },
    filters: s => s.filters,
    getOptions: s => typeFilter => {
      switch(typeFilter) {
        case TYPE_FILTER_PUBLISHING:
          return [ALL_VALUES, ...new Set(s.books.map(b => b.publisher))]
        case TYPE_FILTER_AUTHOR:
          return [ALL_VALUES, ...new Set(s.books.map(b => b.author))]
        case TYPE_FILTER_DATE:
          return [ALL_VALUES, ...[...new Set(s.books.map(b => b.date.year))].sort((a, b) => b - a)]
      }
    }
  }
})

