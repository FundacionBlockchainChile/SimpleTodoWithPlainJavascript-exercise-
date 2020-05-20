let todos = getSavedTodos();

// Filter criteria
const filters = {
  searchText: "",
  completed: false,
};

searchCriteria = function (e) {
  filters.searchText = e.target.value;
  renderTodos();
};

// Buttons
const renderButton = document.querySelector("#button-render-todo");
const newTodo = document.querySelector("#new-todo-text");
// const selector = document.querySelector("#new-todo-selector");
const todoTextInput = document.querySelector("#todo-form");
const btnDeleteTodos = document.querySelector("#button-delete-todo");
const checkBox = document.querySelector("#checkBox");

// Listeners
renderButton.addEventListener("click", renderTodos);
btnDeleteTodos.addEventListener("click", deleteTodos);
newTodo.addEventListener("input", searchCriteria);
todoTextInput.addEventListener("submit", addNewTodo);
checkBox.addEventListener("change", function (e) {filters.completed = e.target.checked;renderTodos();generateSummaryDOM();});

// Initialization
generateSummaryDOM();
