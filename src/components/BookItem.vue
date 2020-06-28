<template>
  <div class="bookItem">
    <img src="" alt="">
    <div class="bookItem"> 
      <h5>Название</h5>
      <p>Название: </p>
      <p>Информация: </p>
      <p>Издательство: </p>
      <p>Автор: </p>
      <p>Дата создания: </p>
      <p>Рейтинг: </p>
      <div class="btn-group">
        <button class="btn btn-secondary" type="button">-</button>
        <button class="btn btn-secondary" type="button">+</button>
      </div>
        <button class="btn btn-secondary" type="button">Добавить в избранное</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bookItem',
    props: {}
    
  }
</script>

<style lang="scss">

</style>