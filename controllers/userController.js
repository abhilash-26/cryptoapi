const userSchema = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { errorResponse, sucessResponse } = require("../utils/ResponseHandler");

const userRegister = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const savedemail = await userSchema.findOne({
      email: email,
    });
    if (savedemail) {
      return res.send({ status: 1, message: "email is already in use" });
    }

    //hash the password using bcryptjs library

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const createdUser = await userSchema.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: hashPassword,
    });
    res.send({
      user: createdUser.name,
      status: 0,
      msg: "User registered successfully",
    });
  } catch (error) {
    // errorResponse(res, error);
    res.send(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userSchema.findOne({ email: email });
    if (!user) return res.send({ message: "email is incorrect" });

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.send({ message: "invalid password" });

    const userTo = { useremail: email };

    // creating the jwt token
    const accesToken = jwt.sign(userTo, process.env.ACCESS_TOCKEN_SECRET);
    res.send({
      status: 0,
      name: user.name,
      msg: "logged in",
      assessToken: accesToken,
    });
  } catch (error) {
    // errorResponse(res, error);
    res.send(error);
  }
};

module.exports = {
  userRegister,
  userLogin,
};
