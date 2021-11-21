const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

// const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected To the database");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api", require("./routes/index"));

const PORT = process.env.PORT || 8090;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
