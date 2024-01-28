const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Connection Open!");
  })
  .catch((err) => {
    console.log("Oh no ERROR!");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive!"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

const Product = mongoose.model("Product", productSchema);

// const bike = new Product({
//   name: "Tire Pump",
//   price: 19.5,
//   categories: ["Cycling"],
// });
// bike
//   .save()
//   .then((data) => {
//     console.log("It Worked!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Oh no ERROR!");
//     console.log(err);
//   });

// Product.findOneAndUpdate(
//   { name: "Tire Pump" },
//   { price: -100 },
//   { new: true, runValidators: true }
// )
//   .then((data) => {
//     console.log("It Worked!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Oh no ERROR!");
//     console.log(err);
//   });

const bike = new Product({
  name: "Cycling Jersey",
  price: 28.5,
  categories: ["Cycling"],
  size: "S",
});
bike
  .save()
  .then((data) => {
    console.log("It Worked!");
    console.log(data);
  })
  .catch((err) => {
    console.log("Oh no ERROR!");
    console.log(err);
  });
