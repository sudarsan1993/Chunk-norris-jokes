//  url for jokes
const URL = "https://api.chucknorris.io/jokes/random";

// DOM Elements

const btn = document.querySelector(".btn");
const jokeText = document.querySelector(".content");

btn.addEventListener("click", async () => {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
});

function displayData({ value: joke }) {
  jokeText.innerHTML = joke;
}
