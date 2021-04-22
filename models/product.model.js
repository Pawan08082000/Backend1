const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: false,
  },
  description: {
    type: String,
    unique: false,
    trim: true,
  },
  price: {
    type: Number,
    unique: false,
    required: "Your username is required",
  },

  
});

module.exports = mongoose.model("Product", ProductSchema);

