const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const jokeContainer = document.querySelector('#jokeContainer');
  fetch(API_URL, myObject)
  .then(res => res.json())
  .then(data => jokeContainer.innerHTML = data.joke);
};

window.onload = () => fetchJoke();