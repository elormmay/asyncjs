// taking values from ui and posting
const apiKey = "?api_key=ytaebk3zj6vghnkw8r7lvbegqpemey6snkv6lhcuaywjx7jtm",
  url = "http://api.wordnik.com/v4/words.json/";

let inputWord = document.querySelector("#word"),
  btnSubmit = document.querySelector("#btnSubmit");
console.log(inputWord);

btnSubmit.addEventListener("click", () => {
  console.log(inputWord.value);

  fetch(`${url}${inputWord.value}/${apiKey}`, { method: "GET" })
    .then((response) => response.json())
    .then((obj) => {
      console.log(obj);
    })
    .catch((err) => console.log(err));
});

// getting

// let url = "https://swapi.dev/api/people/";

// let swapi = (num) => {
//   fetch(`${url}/${num}/`)
//     .then((response) => response.json())

//     .then((obj) => {
//       console.log(obj);
//     });
// };

// swapi(1);

// console.log("Run other commands");
// www.google.com/search?q=fish
// https: fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

/* tesing the url... not working
https: fetch("www.google.com/search?q=fish")
  .then((response) => response.json())
  .then((json) => console.log(json));

  */
// console.log("get data");

// --- posting with fetch ---

/*
let todoObj = {
  completed: false,
  //   id: 100,
  title: "Posting with Fetch with promises",
  userId: 1,
};

post_url = "https://jsonplaceholder.typicode.com/todos";

fetch(post_url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(todoObj),
})
  .then((response) => response.json())
  .then((res) => console.log(res))
  .catch((reject) => console.log(`Unable to create ${reject}`));

const moviePlanets = (movieNum) => {
  url = "https://swapi.dev/api/films/";
  fetch(`${url}${movieNum}/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.planets.forEach((planet) => {
        console.log(planet);
      });
    })
    .catch((reject) => console.log(`${reject}`));
};

moviePlanets(1);

*/
