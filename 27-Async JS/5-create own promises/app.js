/*
PROMISE: A promise is an object representing the eventual completion or failure of an asynchronous operation
*/

/*
create promise
*/

// new Promise((resolve, reject) => {
//   resolve();
//   reject();
// });

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.5) resolve("Your Fake Data");
      reject("Request Error!");
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then((data) => {
    console.log("Done with request!");
    console.log(data);
  })
  .catch((err) => {
    console.log("Failed");
    console.log(err);
  });
