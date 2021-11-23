const Cryptocurrency = require("../models/crypto");
const { errorResponse } = require("../utils/ResponseHandler");
const axios = require("axios");

// const createCurrency = async (req, res) => {
//   try {
//     let { name, symbol, price, data } = req.body;
//     const result = await Cryptocurrency.create({
//       name,
//       symbol,
//       price,
//       data,
//     });
//     res.send(result);
//   } catch (error) {
//     errorResponse(res, error);
//   }
// };

const getCurrencyPrice = async (req, res) => {
  try {
    console.log("hhhh");
    // const result = await Cryptocurrency.find();
    // if (!result) {
    //   res.send({
    //     msg: "No result found",
    //     status: 1,
    //     data: result,
    //   });
    // } else {
    //   res.send({
    //     msg: "all price are",
    //     status: 0,
    //     data: result,
    //   });
    // }

    const result = await axios({
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        interval: "5min",
        function: "TIME_SERIES_INTRADAY",
        symbol: "MSFT",
        // symbol: "BTC",
        datatype: "json",
        output_size: "compact",
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": "d830d8ebdbmshfe5f70735a684ddp16b9b9jsn724f829a1b9b",
      },
    });
    // console.log(result);

    res.send(result.data);
  } catch (error) {
    res.send(error);
    // errorResponse(res, error);
  }
};

module.exports = { getCurrencyPrice };
