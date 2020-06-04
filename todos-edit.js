'use strict'
// DOM Objects
const input = document.querySelector("#todo-title");
const body = document.querySelector("#todo-body");
const removeButton = document.querySelector("#remove-todo");
const addButton = document.querySelector("#add-todo");

const todoID = location.hash.substring(1)
let todos = getSavedTodos()
let todo = todos.find(todo => {
    return todo.id === todoID
})

if (!todo) {
    location.assign('/index.html')
}

// Functions
const updateTodo = () => {
    todo.text = input.value
    todo.completed = body.value;
    saveTodos()
}

// Listeners
input.value = todo.text;
body.value = todo.completed;

input.addEventListener("input", updateTodo);
body.addEventListener("input", updateTodo);
addButton.addEventListener("click", () => {
    location.assign("/index.html");
});
removeButton.addEventListener("click", () => {
  location.assign("/index.html");
  removeTodo(todo);
});

window.addEventListener("storage", (e) => {
  if (e.key === "todos") {
    todos = JSON.parse(e.newValue);
    todo = todos.find((todo) => {
      return todo.id === todoID;
    });
    if (!todo) {
      location.assign("/index.html");
    }
    input.value = todo.text;
    body.value = todo.completed;
  }
});