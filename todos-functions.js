// FUNCTIONS

// Unique ID
// uuidv4();

// Read todos from localSorage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON !== null) {
    let todos = JSON.parse(todosJSON);
    return todos
  } else {
    return [];
  }
};

// Save todos o local storage
const saveTodos = function () {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Render application todos based on filters
const renderTodos = function () {
  deleteTodos();
  let filteredTodos = filterTodos(todos);
  renderTodosToUI(filteredTodos);
  generateSummaryDOM();
};

// Get the DOM elements for list summary
const generateSummaryDOM = () => {
    let left = incompleteTodos(todos);
    let summary = document.querySelector("#summary");
    summary.innerHTML = `<h2>You have ${left} todos left!</h2>`;
  };

// Fliter Incompleted Todos
const incompleteTodos = (todos) => {
  let left = 0;
  todos.forEach((todo) => {
    if (todo.completed === false) left += 1;
  });
  return left;
};

// AddNewTodo
const addNewTodo = function (e) {    
  e.preventDefault();
  let newTodo = {
    id: uuidv4(),
    text: e.target.elements.todoText.value,
    completed: false,
  };
  console.log(newTodo);
  todos = [...todos, newTodo]
  saveTodos();
  e.target.elements.todoText.value = "";
  renderTodos();
}

// Filter Todos
const filterTodos = (filteredTodos) => {
  if (filters.completed) {
    // Filter by completed
    filteredTodos = filteredTodos.filter((todo) => {
      return todo.completed === !filters.completed;
    });
  }
  // Filter by word on input
  filteredTodos = filteredTodos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  return filteredTodos;
};

// Generate Todo for UI
const generateTodoDOM = (todo) => {
  const todoElement = document.createElement("div");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  const textElement = document.createElement("span");
  const removeButton = document.createElement("button");
  removeButton.textContent = "x";
  textElement.textContent = todo.text + " - Completed: " + todo.completed;
  todoElement.appendChild(checkBox);
  todoElement.appendChild(textElement);
  todoElement.appendChild(removeButton);
  return todoElement
}

// Display Todos on UI
const renderTodosToUI = (filteredTodos) => {
  filteredTodos.forEach((todo) => {
    let todoElement = generateTodoDOM(todo)
    document.querySelector("#todos-list").appendChild(todoElement);
  });
};

// Delete Todos
deleteTodos = () => (document.querySelector("#todos-list").innerHTML = "");





