<template>
  <div>
    <Router page="About"/>
    <div class="counter">Todos: {{ todoCount }}</div>
    <div class="counter">Done: {{ doneCount }}</div>
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
</style>
