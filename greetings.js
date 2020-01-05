const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  const date = new Date();
  const hours = date.getHours();
  if (6 <= hours < 12) {
    greeting.innerText = `Good morning, ${text}.`;
  } else if (12 <= hours < 18) {
    greeting.innerText = `Good afternoon, ${text}.`;
  } else if (18 <= hours < 21) {
    greeting.innerText = `Good evening, ${text}.`;
  } else if (21 <= hours < 24) {
    greeting.innerText = `Good night, ${text}.`;
  } else {
    greeting.innerText = `Time to sleep, ${text}.`;
  }
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
