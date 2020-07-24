<template>
    <div class="todo-list container">
        <h2>Список дел | items: {{todos.length}}</h2>
        <form action="#">
            <p>Добавить задачу:</p>
            <input  v-model="newTaskTitle" type="text" placeholder="Title" required>
            <button @click="addTask">Добавить</button>
        </form>
        <div class="row" v-if="todos.length > 0">
            <div class="col-lg-6 row">
                <p>Не завершенные:</p>

                <TodoItem  />

                <div v-bind:class="todo.completed ? 'todo-item completed col-lg-12' : 'todo-item col-lg-12'"
                     v-for="todo in todos"
                     :key="todo.id"
                     v-show="!todo.completed"
                >
                    <p>
                        <button title="удалить" class="remove" @click="removeTask">🗑</button>
                        {{todo.title}} <span>#{{todo.id}}</span>
                        <button title="завершить" class="toggle"  @click="taskToggleActive(todo)">{{todo.completed ? "+" : "x"}}</button>
                    </p>
                </div>
            </div>
            <div class="col-lg-6 row">
                <p>Завершенные:</p>
                <div v-bind:class="todo.completed ? 'todo-item completed col-lg-12' : 'todo-item col-lg-12'"
                     v-for="todo in todos"
                     :key="todo.id"
                     v-show="todo.completed"
                >
                    <p>
                        <button title="удалить" class="remove" @click="removeTask">🗑</button>
                        {{todo.title}} <span>#{{todo.id}}</span>
                        <button title="вернуть" @click="taskToggleActive(todo)">{{todo.completed ? "+" : "x"}}</button>
                    </p>
                </div>
            </div>
        </div>

        <h2 v-else>
            Нечего выводить
        </h2>

    </div>
</template>

<script>
    export default {
        name: 'TodoList',
        data: function() {
            return {
                todos: [
                    {id:0, title:"Todo title", completed:false},
                    {id:1, title:"Todo title", completed:false},
                    {id:2, title:"Todo title", completed:false},
                    {id:3, title:"Todo title", completed:false},
                    {id:4, title:"Todo title", completed:true},
                    {id:5, title:"Todo title", completed:false},
                ],
                newTaskTitle: ""
            }
        },
        methods: {
            taskToggleActive(task){
                task.completed = !task.completed
            },
            addTask(){
                this.todos.push({id: this.todos.length+1, title: this.newTaskTitle , completed: false});
            },
            removeTask(index){
                this.todos.splice(index, 1)
            }
        }
    }
</script>

<style>
    .todo-list{
        margin-top: 10vh;
    }
    .todo-list .row{
        align-items: flex-start;
        margin: 0;
    }
    .todo-item{
        border: 1px solid #ccc;
        border-radius: 6px;
        margin: auto;
        margin-bottom: 10px;
        position: relative;
        background: #fff;
        box-shadow: 0 0 10px rgba(0,0,0,0.05);
    }
    .todo-item:hover{
        border-color: #999;
    }
    .todo-item p{
        margin-top: 20px;
        font-weight: 100;
    }
    .todo-item.completed{
        background: rgba(3,3,3, 0.1);
        color: #999;
        text-decoration: line-through;
    }
    .todo-item button {
        font-family: sans-serif;
        border: 0;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 20px;
        top: 30.5%;
        background: none;
        transition: all .1s ease-in-out;
    }
    .todo-item .remove{
        left: 20px;
        top: 35%;
    }
    .todo-item button:hover{
        transform: scale(1.2);
        cursor: pointer;
    }

    form{
        max-width: 535px;
        text-align: left;
        padding-left: 16px;
        margin-bottom: 15px;
    }
    form input{
        width: 70%;
        padding: 16px;
        height: 52px;
    }
    form button{
        width: 30%;
        height: 52px;
    }
</style>