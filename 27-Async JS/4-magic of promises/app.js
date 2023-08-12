/*
PROMISE: A promise is an object representing the eventual completion or failure of an asynchronous operation
*/

/*
an example of promise
*/

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((res) => {
    console.log(`It worked! ${res}`);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((res) => {
    console.log(`It worked! 2 ${res}`);
    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then((res) => {
    console.log(`It worked! 3 ${res}`);
  })
  .catch((err) => {
    console.log(`Oh no! Error! ${err}`);
  });
