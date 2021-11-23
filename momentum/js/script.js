import { showTime } from "./time.js";
import { showGreeting } from "./greeting.js";
import { setBg } from "./imageSlider.js";
import name from "./greeting.js";

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
name.addEventListener('change', setLocalStorage);

showTime();
showGreeting();
setBg();