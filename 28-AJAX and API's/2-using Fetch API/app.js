/*
returns promise
*/

// https://swapi.dev/api/people/1/

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("resolved!", res);
//     res.json().then((data) => console.log("JSON done", data));
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

/*
refactored
*/

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("resolved!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("JSON done", data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

/*
multiple requests
*/

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("resolved!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("JSON done", data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((res) => {
//     console.log("2nd request resolved", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("JSON done 2nd", data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

/*
refactoring using async function
*/

// const loadStarWarsPeople = async () => {
//   const res = await fetch("https://swapi.dev/api/people/1/");
//   const data = await res.json();
//   console.log(data);
//   const res2 = await fetch("https://swapi.dev/api/people/2/");
//   const data2 = await res2.json();
//   console.log(data2);
// };

// loadStarWarsPeople();

/*
refactoring using async function
wrap everything into try catch
*/

const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("Error!", e);
  }
};

loadStarWarsPeople();
