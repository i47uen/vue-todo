<template>
  <div class="home">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
export default {
  components: {
    TodoList
  }
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  *{
    box-sizing: border-box;
  }
  body{
    background: #f6f5f4;
    overflow: hidden;
  }
  #app {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #2c3e50;
  }
</style>