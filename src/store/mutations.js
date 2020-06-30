import {
  TYPE_FILTER_PUBLISHING,
  TYPE_FILTER_AUTHOR,
  TYPE_FILTER_DATE 
} from './const'

export default {
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
}