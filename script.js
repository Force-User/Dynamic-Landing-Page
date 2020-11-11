"use strict";
const section = document.querySelector(".section");
const time = document.getElementById("time");
const greatings = section.querySelector(".greatings");
const name = section.querySelector(".name");
const goal = section.querySelector(".goal");
const image = section.querySelector(".image");
let amPm;

goal.addEventListener("keypress", setGoalToLocalStorage);
goal.addEventListener("blur", setGoalToLocalStorage);
name.addEventListener("keypress", setNameToLocalStorage);
name.addEventListener("blur", setNameToLocalStorage);

setInterval(changeTime, changeTime(), 1000);
getNameLocalStorage();
getGoalToLocalStorage();

function changeTime() {
  const date = new Date();
  let hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  chengeGreating();
  if(hour > 12) {
      hour -= 12;
      amPm = false;
  }else {
      amPm = true;
  }
  time.innerHTML = `${checkZero(hour)}:${checkZero(minutes)}:${checkZero(seconds)} ${amPm ? "AM" : "PM"}`;
}

function checkZero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

function chengeGreating() {
  const hour = new Date().getHours();
  const backgroundImageProperty = "no-repeat center";
  if (hour < 6) {
    greatings.textContent = "Good Night,";
    section.style.background = `url(image/img4.jpg) ${backgroundImageProperty}`
    section.style.color = "#fff";
  } else if (hour < 12) {
    greatings.textContent = "Good Morning,";
    section.style.background = `url(image/img1.jpg) ${backgroundImageProperty}`
    section.style.color = "#000";
  } else if (hour < 18) {
    greatings.textContent = "Good Afternoon,";
    section.style.background = `url(image/img2.jpg) ${backgroundImageProperty}`
    section.style.color = "#000";
  } else if (hour < 23.59) {
    greatings.textContent = "Good Evening,";
    section.style.background = `url(image/img3.jpg) ${backgroundImageProperty}`
    section.style.color = "#fff";
  }
  
}

function setNameToLocalStorage(e) {
  if (e.type === "keypress") {
    if (e.which === 13 || e.keyCode === 13) {
      e.target.blur();
      localStorage.setItem("name", e.target.textContent);
    }
  } else {
    localStorage.setItem("name", e.target.textContent);
  }
}

function getNameLocalStorage() {
  if (!localStorage.getItem("name")) {
    name.textContent = "[Enter your name]";
  } else {
    name.textContent = `${localStorage.getItem("name")}`;
  }
}

function setGoalToLocalStorage(e) {
  if (e.type === "keypress") {
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("goal", e.target.textContent);
      e.target.blur();
    }
  } else {
    localStorage.setItem("goal", e.target.textContent);
  }
}

function getGoalToLocalStorage() {
  if (!localStorage.getItem("goal")) {
    goal.textContent = "[Enter your goal]";
  } else {
    goal.textContent = localStorage.getItem("goal");
  }
}
