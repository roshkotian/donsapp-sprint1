const { Login, UserInformation } = require("../models/register.model");
const bcrypt = require("bcrypt");

exports.save = async (req, res) => {
  let {
    email,
    userName,
    password,
    role,
    firstName,
    lastName,
    securityAnswer,
    securityQuestion,
    department,
    userId,
    confirmPassword
  } = req.body;

  try {
    hashedPassword = await bcrypt.hash(password, 10);
  } catch {
    res.status(500).send();
  }

  userId = Date.now().toString();
  const dataForInformation = {
    firstName,
    lastName,
    role,
    department,
    email,
    userId
  };
  const dataForLogin = {
    userName,
    password: hashedPassword,
    securityAnswer,
    securityQuestion,
    userId,
    confirmPassword
  };

  const saveInformation = new UserInformation(dataForInformation);

  Login.findOne({ userName: req.body.userName }).then(user => {
    if (user) {
      return res.json({ result: "Username already exists" });
    } else {
      const saveLogin = new Login(dataForLogin);
      saveLogin
        .save()
        .then(
          saveInformation
            .save()
            .then(data =>
              res.json({ result: "New User Registered successfully" })
            )
        )
        .catch(err => {
          res.status(400).send("Registration Failed");
        });
    }
  });
};
