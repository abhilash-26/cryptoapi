const express = require("express");
const { getCurrencyPrice } = require("../controllers/cryptoController");
const { isAuthorized } = require("../utils/authHandler");

const router = express.Router();

// router.post("/create", createCurrency);

router.post("/get-price", isAuthorized, getCurrencyPrice);

module.exports = router;
