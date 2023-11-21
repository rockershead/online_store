const { Order } = require("../../models");
const { ROLES } = require("../../../library/Constants");
//pagination
const list = () => async (req, res, next) => {
  const decodedToken = res.locals.result;
  const role = decodedToken["custom:role"];
  if (req.query) {
    console.log(req.query);
  }
  if (role == ROLES.SUPERADMIN) {
    if (req.query) {
      const result = await Order.find(req.query);
      res.status(200).send(result);
    } else {
      try {
        const orders = await Order.aggregate([
          {
            $lookup: {
              from: "product",
              localField: "items.productId",
              foreignField: "_id",
              as: "items.product",
            },
          },
        ]);

        res.status(200).send(orders);
      } catch (err) {
        res.status(500).send(err);
      }
    }
  }
};

module.exports = { list };
