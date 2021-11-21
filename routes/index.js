const express = require("express");

const router = express.Router();

router.use("/user", require("./userRoute"));

router.use("/currency", require("./currencyRoute"));

module.exports = router;
