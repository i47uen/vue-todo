<template>
  <div class="home">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
export default {
  name: 'Home',
  components: {
    TodoList
  }
}
</script>


<style>
  *{
    box-sizing: border-box;
  }
  body{
    background: #f6f5f4;
    overflow: hidden;
  }
  #app {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>