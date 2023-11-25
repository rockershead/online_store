const { Product } = require("../../models");

//implememt search feature,pagination
const list = () => async (req, res, next) => {
  const { page, pageSize, search, ...otherParams } = req.query;
  const skip = (page - 1) * pageSize;

  const _query = {
    ...otherParams,
  };

  if (search) {
    const regex = new RegExp(search, "i");
    _query.$or = [{ description: regex }, { name: regex }];
  }

  try {
    const result = await Product.find(_query).skip(skip).limit(pageSize);

    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { list };
