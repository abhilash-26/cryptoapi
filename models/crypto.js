const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  data: [],
});

module.exports = mongoose.model("Cryptocurrency", schema, "Cryptocurrency");
