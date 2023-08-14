const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const search = document.querySelector("#search");
  const searchTerm = form.elements.query.value;

  if (searchTerm != "") {
    search.classList.remove("is-danger");
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    clear();

    makeSection(searchTerm);
    makeImages(res.data);
    console.log(res.data);

    form.elements.query.value = "";
  } else {
    search.classList.add("is-danger");
  }
});

const makeSection = (searchTerm) => {
  const div = document.createElement("DIV");
  const div2 = document.createElement("DIV");
  const section = document.createElement("SECTION");
  section.id = "newSec";
  div.id = "newDiv";
  div2.id = "newDiv2";

  div2.classList.add("columns");
  div2.classList.add("is-multiline");
  div2.classList.add("is-centered");
  div2.classList.add("is-variable");
  div2.classList.add("is-3");

  section.classList.add("section");
  div.classList.add("container");
  div.classList.add("is-max-desktop");

  const h2 = document.createElement("h2");
  h2.innerText = `Your Search Results for: ${searchTerm}`;
  h2.classList.add("subtitle");
  h2.classList.add("is-3");
  div.append(h2);

  div.append(div2);
  section.append(div);
  document.body.append(section);
};

const makeImages = (shows) => {
  const div = document.querySelector("#newDiv2");

  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      const column = document.createElement("div");
      const card = document.createElement("div");
      const rating = document.createElement("p");
      const figure = document.createElement("figure");
      const cardContent = document.createElement("div");
      const gens = document.createElement("p");

      gens.innerText = "Genres: ";
      if (result.show.genres.length > 0) {
        for (let gen of result.show.genres) {
          gens.innerText += `${gen}, `;
        }
      } else {
        gens.innerText += "N/A";
      }

      figure.classList.add("image");
      cardContent.classList.add("card-content");

      column.classList.add("column");
      // column.classList.add("is-one-quarter");
      column.classList.add("is-one-third");
      card.classList.add("is-centered");

      card.classList.add("card");
      // a.classList.add("is-inline-block");

      const btn = document.createElement("a");
      btn.classList.add("button");
      // btn.classList.add("is-dark");
      btn.classList.add("is-info");
      btn.classList.add("is-inline-block");
      btn.classList.add("is-fullwidth");
      btn.innerText = "Watch Now!";

      const title = document.createElement("h2");
      title.classList.add("title");
      title.classList.add("is-5");

      title.innerText = result.show.name;
      btn.href = result.show.url;
      img.src = result.show.image.medium;

      rating.classList.add("subtitle");
      rating.classList.add("is-5");
      rating.innerText = "Rating: ";
      if (result.show.rating.average) {
        rating.innerText += result.show.rating.average;
      } else {
        rating.innerText += "N/A";
      }
      figure.append(img);

      cardContent.append(title);
      cardContent.append(gens);
      cardContent.append(rating);
      // cardContent.append(btn);
      card.append(figure);
      card.append(cardContent);
      card.append(btn);

      column.append(card);
      div.append(column);
    }
  }
};

const clear = () => {
  const sec = document.querySelector("#newSec");
  if (sec) {
    sec.remove();
  }
};
