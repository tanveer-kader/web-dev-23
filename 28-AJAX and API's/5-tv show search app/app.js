// const form = document.querySelector("#searchForm");

// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   console.log("submitted");
//   const searchTerm = form.elements.query.value;
//   const res = await axios.get(
//     `https://api.tvmaze.com/search/shows?q=${searchTerm}`
//   );
//   makeImages(res.data);
//   form.elements.query.value = "";
// });

// const makeImages = (shows) => {
//   for (let result of shows) {
//     if (result.show.image) {
//       const img = document.createElement("IMG");
//       img.src = result.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };

/*
refactoring
*/
// const form = document.querySelector("#searchForm");

// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   console.log("submitted");
//   const searchTerm = form.elements.query.value;
//   const config = { params: { q: searchTerm } };
//   const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
//   makeImages(res.data);
//   form.elements.query.value = "";
// });

// const makeImages = (shows) => {
//   for (let result of shows) {
//     if (result.show.image) {
//       const img = document.createElement("IMG");
//       img.src = result.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };

/*
adding some more features
*/
const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log("submitted");
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  clear();
  makeHeading(searchTerm);
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeHeading = (searchTerm) => {
  const h2 = document.createElement("h2");
  h2.innerText = `Your Search Results for: ${searchTerm}`;
  document.body.append(h2);
};

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      // const card = document.createElement("DIV");
      const img = document.createElement("IMG");
      const a = document.createElement("a");

      // const btn = document.createElement("button");
      // btn.innerText = "click";
      a.href = result.show.url;
      img.src = result.show.image.medium;

      // a.append(img);
      // card.append(a);
      // card.append(btn);
      // document.body.append(card);

      a.append(img);
      document.body.append(a);
    }
  }
};

const clear = () => {
  const imgs = document.querySelectorAll("img");
  // console.log(imgs);
  if (imgs.length > 0) {
    // e.target.remove();
    for (let img of imgs) {
      img.remove();
    }
    console.log("removed");
  }
  const h2 = document.querySelector("h2");
  // console.log(imgs);
  if (h2) {
    h2.remove();
  }
};
