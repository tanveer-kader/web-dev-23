const blue = require("./blue");
const sadie = require("./sadie");
const janet = require("./jenet");

// to require a whole directory there must be an index.js file which node will search for to include all the other files in that directory

const allCats = [blue, sadie, janet];

console.log(allCats);

module.exports = allCats;
