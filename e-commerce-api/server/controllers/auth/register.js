const { User } = require("../../models");
const { uuid } = require("uuidv4");
const { hashPassword, comparePassword, sendEmail } = require("../../utils");

const register = () => async (req, res, next) => {
  const { email, password, name, contact, age } = req.body;
  console.log(User);
  var user = await User.findOne({ email: email });

  if (user) {
    res.status(400).send("This user already exists.");
  } else {
    user = new User({
      email: email,
      password: hashPassword(password),
      name: name,
      contact: contact,
      age: age,
    });

    user
      .save()
      .then((result) => {
        res.status(200).send(result);
        sendEmail(
          [email],
          "Welcome to Attar Factory",
          `Welcome ${name} to Attar Factory`
        );
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
};

module.exports = { register };
