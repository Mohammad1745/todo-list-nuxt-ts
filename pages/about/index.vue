<template>
  <div>
    <Router page="About"/>
    <div class="counter">Todos: {{ todoCount }}</div>
    <div class="counter">Done: {{ doneCount }}</div>
    <div class="link">
      <a href="https://github.com/Mohammad1745/todo-list-nuxt-ts"> Source code</a>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(["todoCount", "doneCount"])
  }
}
</script>

<style scoped>
  .counter {
    text-align: center;
    font-size:30px;
    font-weight:bold;
  }
  .link{
    text-align: center;
    margin-top: auto;
  }
</style>
