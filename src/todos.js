import { v4 as uuidv4 } from "uuid";
import { renderTodos, generateTodoDOM, generateSummaryDOM } from "./views";

// Setup the empty todos array
let todos = [];

// loadTodos
// Arguments: none
// Return value: none
// Fetch existing todos from localStorage
const loadTodos = () => {
  const todosJSON = localStorage.getItem("todos");

  try {
    todos = todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    todos = [];
  }
};

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos;

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (text) => {
  todos.push({
    id: uuidv4(),
    text,
    completed: false,
  });
  saveTodos();  
};

loadTodos();

// removeTodo
// Arguments: id of todo to remove
// Return value: none
// Remove todo by id
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
    saveTodos();
  }
};

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
// Toggle the completed value for a given todo
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
  }
};

// Make sure to call loadTodos and setup the exports
export { saveTodos, getTodos, createTodo, removeTodo, toggleTodo, loadTodos };
