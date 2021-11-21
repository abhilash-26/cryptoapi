const jwt = require("jsonwebtoken");

const isAuthorized = async (req, res, next) => {
  const { email } = req.body;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == "") return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOCKEN_SECRET, (err, userTo) => {
    if (err) return res.sendStatus(403);
    next();
  });
};
module.exports = { isAuthorized };
