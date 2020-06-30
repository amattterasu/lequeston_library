<template>
  <div class="flex-fill input-group">
    <div class="input-group-prepend">
      <label class="input-group-text" >{{ labelName }}</label>
    </div>
    <select class="custom-select" :id="type">
      <option 
        v-for="option in options"
        :value="option"
        :key="option"
        @click="setFilter(option, type)"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'vselect',
  props: {
     type: String,
     labelName: String
  },
  computed: {
    options() {
      return this.$store.getters.getOptions(this.type)
    }
  },
  methods: {
    setFilter(option, type) {
      this.$store.dispatch('setFilter', {option, type})
    }
  }
}
</script>
