let body = document.querySelector('body');
let button = document.createElement('button');
let count = document.createElement('div');
count.innerText = '0';
button.addEventListener('click', () => {
  let count = document.querySelector('div');
  count.innerText = Number(count.innerText) + 1;
});
button.innerText = 'Count';

body.appendChild(count);
body.appendChild(button)