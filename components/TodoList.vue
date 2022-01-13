<template>
<div class="max-w-lg mx-auto">
  <div class="form">
    <input type="text" v-model="todo" placeholder="Add Todo Name" class="todo-input">
    <input type="submit" class="btn" @click="addTodo(todo)">
    <div class="counter">Todos: {{ todoCount }} | Done: {{ doneCount }}</div>
  </div>
  <p v-if="todoCount" style="text-align: center;">(Double Click to make todo "DONE")</p>
  <div
    v-for="(todo, i) in allTodos"
    :key="todo.id"
    class="todo"
    :class="{'done': todo.done}"
    @dblclick="toggleTodo(todo.id)"
  >
    {{ i+1 }} {{ todo.text }}
    <i class="fas fa-trash-alt delete" @click="deleteTodo(todo)"></i>
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  head:{
    title: "Home | Nuxt TS Todo"
  },
  name: "TodoList",
  data() {
    return {
      todo:''
    }
  },
  computed: {
    ...mapGetters(['allTodos', 'todoCount', 'doneCount']),
  },
  methods: {
    ...mapActions(['addTodo', 'toggleTodo', 'deleteTodo'])
  }
}
</script>

<style scoped>
.form{
  padding: 10px;
}
.todo-input {
  border: 1px solid #232323;
  padding: 10px;
}
.btn{
  background: #232323;
  color: #eee;
  padding: 10px;
}
.counter {
   text-align: center;
   font-size:30px;
   font-weight:bold;
 }
.todo {
  margin: 10px;
  padding: 10px;
  font-weight: bold;
  border: 1px solid #232323;
  border-radius: 10px;
  cursor: pointer;
}
.done {
  background-color: #232323;
  color: #eee;
}
.delete{
  position: relative;
  float: right;
  bottom: 0;
}
</style>
