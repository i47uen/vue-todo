<template>
    <div class="todo-list container">
        <h2>Список дел | всего дел: {{todos.length}}</h2>
        <form @submit.prevent="onSubmit" class="form">
            <p>Добавить задачу:</p>
            <div>
                <span v-show="formErr" style="color:red">{{formErrMsg}}</span>
                <input  v-model="newTaskTitle" type="text" placeholder="Введите текст">
                <button @click="addTask">Добавить</button>
            </div>
        </form>
        <hr>
        <div class="row" v-if="todos.length > 0">
            <div class="col-lg-6 row">
                <p>Незавершенные:</p>

                <div v-bind:class="todo.completed ? 'todo-item completed col-lg-12' : 'todo-item col-lg-12'"
                     v-for="(todo, index) in todos"
                     :key="index"
                     v-show="!todo.completed"
                >
                    <p>
                        <button title="удалить" class="remove" @click="removeTask(index)">🗑</button>
                        {{todo.title}}
                        <button title="завершить" class="toggle"  @click="taskToggleActive(todo)">x</button>
                    </p>
                </div>

            </div>
            <div class="col-lg-6 row">
                <p>Завершенные:</p>

                <div v-bind:class="todo.completed ? 'todo-item completed col-lg-12' : 'todo-item col-lg-12'"
                     v-for="(todo, index) in todos"
                     :key="index"
                     v-show="todo.completed"
                >
                    <p>
                        <button title="удалить" class="remove" @click="removeTask(index)">🗑</button>
                        {{todo.title}}
                        <button title="вернуть" @click="taskToggleActive(todo)">+</button>
                    </p>
                </div>

            </div>
        </div>

        <p v-else class="mt-5">
            У вас нет дел. <br>
            Добавьте задачу в форме выше ↑
        </p>

    </div>
</template>

<script>
    export default {
        name: 'TodoList',
        data: function() {
            return {
                todos: [
                    {id:1, title:"Изучить основы React", completed:true},
                    {id:2, title:"Понять, что реакт сложна", completed:true},
                    {id:3, title:"Изучить основы vue", completed:true},
                    {id:4, title:"Написать приложение TodoApp", completed:true},
                    {id:5, title:"Покормить кота", completed:false},
                    {id:6, title:"Покормить второго кота", completed:false},
                ],
                newTaskTitle: "",
                formErr: false,
                formErrMsg: "Минимально количество символов: 5"
            }
        },
        methods: {
            taskToggleActive(task){
                task.completed = !task.completed
            },
            addTask(){
                if (this.newTaskTitle !== "" && this.newTaskTitle.length >= 5){
                    this.todos.push({id: this.todos.length+1, title: this.newTaskTitle , completed: false});
                    this.newTaskTitle = ""
                    this.formErr = false
                } else {
                    this.formErr = true
                }
            },
            removeTask(index){
                this.todos.splice(index, 1)
                console.log("Delete el", index)
            },
            onSubmit(){
                //    0
            }
        }
    }
</script>

<style>
    .todo-list{
        margin-top: 5vh;
    }
    .todo-list .row{
        align-items: flex-start;
        margin: 0;
        max-height: 70vh;
        height: 100%;
        overflow-y: auto;
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
        font-weight: 400;
        text-align: left;
        padding-left: 40px;
    }
    .todo-item.completed{
        background: rgba(3,3,3, 0.1);
        /*color: #999;*/
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
        user-select: none;
    }
    .todo-item .remove{
        left: 20px;
        top: 35%;
    }
    .todo-item button:hover{
        transform: scale(1.2);
        cursor: pointer;
        color: indianred;
    }

    .form{
        max-width: 535px;
        text-align: left;
        padding-left: 16px;
        margin-bottom: 15px;
    }
    .form input{
        width: 70%;
        padding: 16px;
        height: 52px;
        line-height: 0;
    }
    .form button{
        width: 30%;
        height: 52px;
    }

    @media (max-width: 768px) {
        form button{
            font-size: 14px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
