<template>
  <div class='hello'>
    <h1>{{ title }}</h1>
    <h3>Todo</h3>

    <p v-if="formerrs.length">
      <ul>
        <li v-for="formerr in formerrs">{{formerr}}</li>
      </ul>
    </p>

    <textarea v-model="todo.desc" @keydown.enter.prevent.default="SaveTodo(todo)" placeholder="textarea todo detail"></textarea>
    <button @click="SaveTodo(todo)">save</button>
    <h3>List of ToDos</h3>
    <ul v-for="todo in todos" v-model="todos">
      <li><textarea>{{todo.desc}}</textarea></li>
      <button @click="UpdateTodo(todo)">update</button>
      <button @click="DeleteTodo(todo)">delete</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Welcome to my first todo app',
      todo: {
        'desc':''
      },
      todos: [],
      formerrs: []
    }
  },
  created() {
    this.GetTodos()
  },
  methods: {
    //add new todo
    SaveTodo(todo){
      this.CheckForm(todo)
      console.log(this.formerrs.length)
      if(this.formerrs.length > 0){
      }else{
      this.todos.push(todo)
      this.todo = {
        'desc':''
        }
      }
    },
    GetTodos(){
      this.todos = [
      ]
    },
    UpdateTodo(id){
      console.log(id)
    },
    DeleteTodo(todo){
      this.todos.splice(this.todos.indexOf(todo), 1)
      console.log(this.todos)
    },
    reset: function(obj){
      obj.assign(this.$data,initialState())
    },
    //check for new todo registration
    CheckForm: function(obj){
      this.formerrs = [];
      console.log(obj)
      if(!obj.desc){
        this.formerrs.push('please input todo description');
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin: 10px 0;
  padding: 10px;
}
</style>