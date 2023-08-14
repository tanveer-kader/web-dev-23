/*
axios returns json data at one call
*/

// https://swapi.dev/api/people/1/

axios
  .get("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("Response: ", res);
  })
  .catch((err) => {
    console.log("Error!", err);
  });

/*
refactor using async
*/

const getStarWarsPerson = async () => {
  const res = await axios.get("https://swapi.dev/api/people/1/");
  console.log(res.data);
};

getStarWarsPerson();

/*
get any data using variable
*/

const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("Error!", e);
  }
};

getStarWarsPerson(5);
getStarWarsPerson(10);
