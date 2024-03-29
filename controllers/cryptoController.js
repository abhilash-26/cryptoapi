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

    // const result = await axios({
    //   method: "GET",
    //   url: "https://alpha-vantage.p.rapidapi.com/query",
    //   params: {
    //     interval: "5min",
    //     function: "TIME_SERIES_INTRADAY",
    //     // symbol: "MSFT",
    //     symbol: "MSFT",
    //     datatype: "json",
    //     output_size: "compact",
    //   },
    //   headers: {
    //     "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
    //     "x-rapidapi-key": "d830d8ebdbmshfe5f70735a684ddp16b9b9jsn724f829a1b9b",
    //   },
    // });

    const result = await axios({
      method: "get",
      url: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin%2Cbinancecoin%2Cdogecoin%2Cchainlink%2Cvechain&vs_currencies=inr",
    });

    if (!result) {
      res.send({
        msg: "No result found",
        status: 1,
        Price: null,
      });
    } else {
      res.send({
        msg: "Data found is",
        status: 0,
        Price: result.data,
      });
    }
  } catch (error) {
    res.send(error);
    // errorResponse(res, error);
  }
};

module.exports = { getCurrencyPrice };
