const toDoForm = window.document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = window.document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

localStorage.setItem("toDos", "[]");

function addClassList(event) {
  toDoInput.classList.add("on-top");
}

function removeClassList(event) {
  if (toDos.length < 1) {
    toDoInput.classList.remove("on-top");
  }
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  li.classList.add("delToDoAnim");
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
  removeClassList();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  li.className = "toDoBox";
  const delBtn = document.createElement("button");
  delBtn.className = "js-delBtn";
  const div = document.createElement("div");
  div.className = "js-toDoList__ToDoText";
  const newId = toDos.length + 1;
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  div.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(div);
  li.id = newId;
  toDoList.appendChild(li);
  li.classList.add("slide-bck-center-out");
  li.classList.remove("slide-bck-center-out");
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function something(toDo) {
      paintToDo(toDo.text);
      addClassList();
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
  toDoInput.addEventListener("focus", addClassList);
  toDoInput.addEventListener("blur", removeClassList);
}

init();
