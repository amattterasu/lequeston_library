import {
  ALL_VALUES,
  TYPE_FILTER_PUBLISHING,
  TYPE_FILTER_AUTHOR,
  TYPE_FILTER_DATE 
} from './const'

export default {
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