import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import {
  ALL_VALUES,
  TYPE_FILTER_PUBLISHING,
  TYPE_FILTER_AUTHOR,
  TYPE_FILTER_DATE 
} from './const'

export default new Vuex.Store({
  state: {
    books: [],
    filteredBooks: [],
    favorites: [],
    publisher: { option: ALL_VALUES, type: TYPE_FILTER_PUBLISHING },
    author: { option: ALL_VALUES, type: TYPE_FILTER_AUTHOR },
    year: { option: ALL_VALUES, type: TYPE_FILTER_DATE },
    favoritesMode: false,
    searchText: '',
    filters: [
      {
        name: "Выберите издательство",
        type: TYPE_FILTER_PUBLISHING
      },
      {
        name: "Выберите автора",
        type: TYPE_FILTER_AUTHOR

      },
      {
        name: "Выберите год",
        type: TYPE_FILTER_DATE
      }
    ]
  },
  mutations,
  actions,
  getters
})

