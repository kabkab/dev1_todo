<template>
  <div class='hello'>
    <h1>{{ title }}</h1>
    <h3>Todo</h3>

    <p v-if="formerrs.length">
      <ul>
        <li v-for="formerr in formerrs">{{formerr}}</li>
      </ul>
    </p>

    <v-textarea v-model="todo.desc" @keydown.enter.prevent.default="SaveTodo(todo)" label="description" class="ms-2" rows="1"></v-textarea>
    <h5>tags</h5>
    <ul>
      <li v-for="deftag in deftags"><input type="checkbox" v-bind:id="deftag" v-bind:value="deftag" v-model="todo.tags">{{deftag}}</li>
    </ul>
    <v-text-field type="text" v-model="tag" label="input tag"></v-text-field>
    <v-btn @click="createTag(tag)">create tag</v-btn>

    <v-btn @click="SaveTodo(todo)">save todo</v-btn>
    
    <h3>List of Todos</h3>
    <p v-if="todos.length === 0">
      <h5>no todos</h5>
    </p>

    <v-container>
      <v-row class="ms-2" >
        <v-col v-for="todo in todos" v-model="todos">
          <v-card class="pa-2" title outlined>
            <v-textarea v-model="todo.desc" label="description" rows="2"></v-textarea>
            <ul>
              <li v-for="tag in todo.tags">{{tag}}</li>
            </ul>
          <v-btn @click="UpdateTodo(todo)">update</v-btn>
          <v-btn @click="DeleteTodo(todo)">delete</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
  margin: auto;
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