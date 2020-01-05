const clockContainer = document.querySelector(".js-clock"),
  clockDate = clockContainer.querySelector(".js-clock.date"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const dayInMonth = date.getDate();
  const dayInWeek = date.getDay();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const weekdays = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
  clockDate.innerText = `${month}/${dayInMonth}/${year} ${weekdays[dayInWeek]}`;
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
