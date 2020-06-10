// Add necessary imports
// Make sure to load uuid via an npm module when necessary
import { createTodo } from "./todos";
import { setFilters } from "./filters";
import { renderTodos } from "./views";

// Set up index.html to load the bundle
console.log("conected..!!");
// Render initial todos
// renderTodos()
renderTodos()

// Set up search text handler
document.querySelector("#search-text").addEventListener("input", (e) => {
  setFilters({
    searchText: e.target.value,
  });
  renderTodos();
});

// Set up checkbox handler
document.querySelector("#hide-completed").addEventListener("change", (e) => {
  setFilters({
    hideCompleted: e.target.value
  });
  renderTodos()
});

// Set up form submission handler
document.querySelector("#new-todo").addEventListener("submit", (e) => {
  createTodo(e)
});

// Bonus: Add a watcher for local storage
window.addEventListener("storage", (e) => {
  if (e.key === "todos") {
    renderTodos();
  }
});