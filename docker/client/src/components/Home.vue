<template>
  <div class='hello'>
    <h1>{{ title }}</h1>
    <h3>Todo</h3>

    <p v-if="formerrs.length">
      <ul>
        <li v-for="formerr in formerrs">{{formerr}}</li>
      </ul>
    </p>

    <h5>description</h5>
    <textarea v-model="todo.desc" @keydown.enter.prevent.default="SaveTodo(todo)" placeholder="textarea todo detail"></textarea>
    <h5>tags</h5>
    <input type="text" v-model="tag">
    <button @click="createTag(tag)">create tag</button>
    <ul>
      <li v-for="deftag in deftags"><input type="checkbox" v-bind:id="deftag" v-bind:value="deftag" v-model="todo.tags">{{deftag}}</li>
    </ul>
    <button @click="SaveTodo(todo)">save todo</button>
    
    <h3>List of ToDos</h3>
    
    <ul v-for="todo in todos" v-model="todos">
      <li><textarea v-model="todo.desc">{{todo.desc}}</textarea></li>
      <ul>
        <li v-for="tag in todo.tags">{{tag}}</li>
      </ul>
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
        'desc':'',
        tags:[]
      },
      deftags:['hobby', 'business', 'other'],
      todos: [],
      formerrs: [],
      tag:''
    }
  },
  created() {
    this.GetTodos()
  },
  methods: {
    //add new todo
    SaveTodo(todo){
      this.CheckForm(todo)
      if(this.formerrs.length > 0){
      }else{
      this.todos.push(todo)
      this.todo = {
        'desc':'',
        tags:[]
        }
      }
    },
    GetTodos(){
      this.todos = [
      ]
    },
    UpdateTodo(todo){
      this.todos.splice(this.todos.indexOf(todo), 1, todo)
    },
    DeleteTodo(todo){
      this.todos.splice(this.todos.indexOf(todo), 1)
    },
    reset: function(obj){
      obj.assign(this.$data,initialState())
    },
    //check for new todo registration
    CheckForm: function(obj){
      this.formerrs = [];
      if(!obj.desc){
        this.formerrs.push('please input todo description');
      }
    },
    createTag: function (tag) {
      this.deftags.push(tag);
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