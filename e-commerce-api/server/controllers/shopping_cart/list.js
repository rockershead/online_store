const { redisClient } = require("../../utils");

const list = () => async (req, res, next) => {
  //get the userId and set that id to the products
  const decodedToken = res.locals.result;
  const email = decodedToken.email;

  const cart = await redisClient.get(email);
  if (cart) {
    res.status(200).send(`${cart}`);
  } else {
    res.status(400).send("User does not exist");
  }
};

module.exports = { list };
