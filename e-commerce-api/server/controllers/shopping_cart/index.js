const { Router: router } = require("express");

const { addItem } = require("./addItem");
const { list } = require("./list");
const { deleteItem } = require("./deleteItem");
const { showItem } = require("./showItem");

module.exports = () => {
  const api = router();

  api.post("/", addItem());
  api.get("/", list());
  api.delete("/:productId", deleteItem());
  api.get("/:productId", showItem());

  return api;
};
