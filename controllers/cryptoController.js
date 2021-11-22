const Cryptocurrency = require("../models/crypto");
const { errorResponse } = require("../utils/ResponseHandler");

const createCurrency = async (req, res) => {
  try {
    let { name, symbol, price, data } = req.body;
    const result = await Cryptocurrency.create({
      name,
      symbol,
      price,
      data,
    });
    res.send(result);
  } catch (error) {
    errorResponse(res, error);
  }
};

const getCurrencyPrice = async (req, res) => {
  try {
    const result = await Cryptocurrency.find();
    if (!result) {
      res.send({
        msg: "No result found",
        status: 1,
        data: result,
      });
    } else {
      res.send({
        msg: "all price are",
        status: 0,
        data: result,
      });
    }
  } catch (error) {
    errorResponse(res, error);
  }
};

module.exports = { createCurrency, getCurrencyPrice };
