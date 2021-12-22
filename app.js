// SELECTORS

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// FUNCTIONS

function addTodo(event) {
  // preventing form from submitting
  event.preventDefault();

  // todoDiv
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // adding li to todoDiv
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // check mark button

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i> ';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // check trash button

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i> ';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // appending the whole div to ul

  todoList.appendChild(todoDiv);

  // clearing todo-input value

  todoInput.value = "";
}

// deleteCheck function:

function deleteCheck(e) {
  const item = e.target;

  // delete todo:

  if (item.classList[0] === "trash-btn") {
    const todoDelete = item.parentElement;

    // animation
    todoDelete.classList.add("fall");
    todoDelete.addEventListener("transitionend", function () {
      todoDelete.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todoCheck = item.parentElement;
    todoCheck.classList.toggle("completed");
  }
}

// filterTodo function:

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
