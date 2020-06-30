<template>
  <div class="sorting">
    <p class="text-uppercase font-weight-bold m-2">Сортировка</p>
    <button class="btn btn-secondary" @click="sortBy('date')"  type="button">По дате</button>
    <button class="btn btn-secondary" @click="sortBy('title')" type="button">По алфавиту</button>
    <button class="btn btn-secondary" @click="sortBy('rating')" type="button">По рейтингу</button>
  </div>
</template>

<script>
export default {
  name: 'sorting',
  methods: {
    sortBy(sortParam) {
      this.$store.dispatch('sortedList', sortParam)
    }
  }
}
</script>
