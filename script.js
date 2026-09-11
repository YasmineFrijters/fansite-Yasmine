let div2main = document.querySelector('#div2main');
let mainpage = document.querySelector('#mainpage');
let greeting = document.querySelector('#greeting');
let title = document.querySelector('#title');

let time = new Date().getHours();

if (time < 12) {
  greeting.textContent = 'Good morning';
} else if (time < 18) {
  greeting.textContent = 'Good day';
} else {
  greeting.textContent = 'Good evening';
}


if (greeting) {
  greeting.addEventListener('click', function() {
    greeting.style.color = 'red';
  });
} else {
  greeting.addEventListener('click', function() {
    greeting.style.color = 'yellow';
  });
}
title.addEventListener('click', function() {
  if (title.innerHTML === '<h1>Kirby Page</h1>') {
    title.innerHTML = '<h1>:D</h1>';
  } else {
    title.innerHTML = '<h1>Kirby Page</h1>';
  }
});