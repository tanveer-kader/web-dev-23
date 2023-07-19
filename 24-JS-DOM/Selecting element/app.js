/* *************
getELementByID
**************** */

const banner = document.getElementById("banner");
const toc = document.getElementById("toc");

/* *************
getELementsByTagName
not an array
**************** */
const allImages = document.getElementsByTagName("img");

const imgCnt = allImages.length;
const img2 = allImages[1];
const img3 = allImages[2];

for (let img of allImages) {
  console.log(img.src);
}

for (let img of allImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
}

const allParagraph = document.getElementsByTagName("p");
const allDiv = document.getElementsByTagName("div");
const allBold = document.getElementsByTagName("b");
const allAnchor = document.getElementsByTagName("a");

/* *************
getELementsByClassName
not an array
**************** */

const squareImages = document.getElementsByClassName("square");

for (let image of squareImages) {
  image.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
}
