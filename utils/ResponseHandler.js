const sucessResponse = (res, data = null, message = null) => {
  return res.send({
    status: 0,
    user: data,
    msg: message,
    assessToken: data.assessToken,
  });
};

const errorResponse = (res, message = null) => {
  return res.send({
    status: 1,
    msg: error,
    data: null,
  });
};

module.exports = { sucessResponse, errorResponse };
