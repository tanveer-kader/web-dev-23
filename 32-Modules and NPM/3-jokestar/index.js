const jokes = require("give-me-a-joke");

// see the methods
console.dir(jokes);

jokes.getRandomDadJoke(function (joke) {
  console.log(joke);
});

// color jokes using color package
const colors = require("colors");
jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});
