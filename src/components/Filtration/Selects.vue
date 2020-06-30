<template>
  <div class="selects">
    <p class="text-uppercase font-weight-bold m-2">Фильтрация</p>
    <div class="d-flex">
      <Select 
        v-for="filter in filters"
        :key="filter.name"
        :labelName="filter.name"
        :type="filter.type"
      />
    </div>
  </div>
</template>

<script>
import Select from './Select'

export default {
  name: 'selects',
  components: {
    Select
  },
  computed: {
    filters() {
      return this.$store.getters.filters
    }
  }
}
</script>
