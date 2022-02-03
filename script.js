const addButton = document.querySelector(".add-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

const bChecked = document.querySelector(".checked");

// event
addButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteChecked);

// function
function addTodo(event) {
  event.preventDefault();

  if (todoInput.value == '') {
    return alert('Isi field terlebih dahulu');
  }

  const newLi = document.createElement("li");
  newLi.classList.add("list-group-item");
  newLi.innerText = todoInput.value;

  const bDiv = document.createElement("div");
  bDiv.classList.add("button-div");

  const bChecked = document.createElement("span");
  bChecked.innerHTML = `<i class="bi bi-check-lg"></i>`;
  bChecked.classList.add("checked");
  bDiv.append(bChecked);

  const bDelete = document.createElement("span");
  bDelete.innerHTML = `<i class="bi bi-trash-fill"></i>`;
  bDelete.classList.add("delete");
  bDiv.append(bDelete);

  newLi.append(bDiv);
  todoList.append(newLi);

  todoInput.value = "";
}

function deleteChecked(event) {
  const item = event.target;
  const todo = item.parentElement.parentElement;

  if (item.classList.contains("delete")) {
    todo.classList.add('fall');

    todo.addEventListener("transitionend", ()=>{
      todo.remove();
    })
  }

  if (item.classList.contains("checked")) {
    todo.classList.toggle("complete");
  }
}
