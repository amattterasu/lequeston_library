<template>
  <nav class="navbar">
    <h1>Navbar</h1>
     <button class="btn btn-secondary" type="button" @click="this.changeMode">
       {{ favoritesMode ? 'Общее' : 'Избранное' }}
      </button>
  </nav>
</template>

<script>

    import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'navbar',
     computed: mapGetters(['favoritesMode']),
    methods: {
     ...mapActions(['changeMode'])
    }
  }
</script>

<style lang="scss">

</style>