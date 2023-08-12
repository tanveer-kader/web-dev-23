/*
PROMISE: A promise is an object representing the eventual completion or failure of an asynchronous operation
*/

/*
an example of API callbacks 
*/

const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

fakeRequestCallback(
  "books.com/page1",
  function (response) {
    console.log("IT Worked!");
    console.log(response);
    fakeRequestCallback(
      "books.com/page2",
      function (response) {
        console.log("IT Worked! 2");
        console.log(response);
        fakeRequestCallback(
          "books.com/page3",
          function (response) {
            console.log("IT Worked! 3");
            console.log(response);
          },
          function (err) {
            console.log("Error! 3", err);
          }
        );
      },
      function (err) {
        console.log("Error! 2", err);
      }
    );
  },
  function (err) {
    console.log("Error!", err);
  }
);
