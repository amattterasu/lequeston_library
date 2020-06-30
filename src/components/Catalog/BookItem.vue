<template>
  <div class="col mb-4">
    <div class="card h-100">
      <img class="card-img-top card-book-img" :src="book.image" :alt="book.title">
      <div class="card-body"> 
        <h5 class="card-title">Название: {{ book.title }}</h5>
        <p class="card-text">Информация: {{ book.info }}</p>
        <p class="card-text">Издательство: {{ book.publisher }}</p>
        <p class="card-text">Автор: {{ book.author }}</p>
        <p class="card-text">Дата создания: {{ `${book.date.day} ${months[book.date.month - 1]} ${book.date.year}` }}</p>
        <p class="card-text">Рейтинг: {{ book.rating }}</p>
        <div class="btn-group">
          <button class="btn btn-secondary" @click="ratingDown" type="button">-</button>
          <button class="btn btn-secondary" @click="ratingUp" type="button">+</button>
        </div>
          <button v-if="!book.favorite" class="btn btn-secondary" type="button" @click="addFavorites">
            Добавить в избранное
          </button>
          <button v-else class="btn btn-secondary" type="button" @click="deleteFavorites">
            Убрать из избранного
          </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookItem',
  props: {
    book: {
      type: Object
    },
    months: {
      type: Array
    }
  },
  methods: {
    addFavorites() {
      this.$emit('addFavorites', this.book)
    },
    deleteFavorites() {
      this.$emit('deleteFavorites', this.book.id)
    },
    ratingUp() {
      this.$emit('ratingUp', this.book.id)
    },
    ratingDown() {
      this.$emit('ratingDown', this.book.id)
    }
  }
}
</script>

<style lang="scss">
  .card-book-img {
    object-fit: contain;
    height: 300px;
  }
</style>