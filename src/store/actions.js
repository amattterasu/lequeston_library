import { URL_FETCH } from './const'

export default {
  async fetchBooks({commit}) {
    try {
      const res = await fetch(URL_FETCH)
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
}