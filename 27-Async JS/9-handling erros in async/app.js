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

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequestPromise("/page1");
    console.log(data1);
    let data2 = await fakeRequestPromise("/page2");
    console.log(data2);
  } catch (e) {
    console.log("caught an error", e);
  }
}
