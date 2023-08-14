/*
axios returns json data at one call
*/

// https://icanhazdadjoke.com/

/*
gets html
*/

const getDadJoke = async () => {
  const res = await axios.get(" https://icanhazdadjoke.com/");
  console.log(res);
};

/*
gets html
in the second argument there is configuration information
*/

const getDadJoke = async () => {
  const res = await axios.get(" https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  console.log(res);
  console.log(res.data.joke);
};

/*
refactor
*/

const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get(" https://icanhazdadjoke.com/", config);
  console.log(res);
  console.log(res.data.joke);
};

/*
get jokes using a button
DOM
*/

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get(" https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "No jokes available.";
  }
};

button.addEventListener("click", addNewJoke);
