const userModel = require("./model");

module.exports = {
  getAll: (req, res) => {
    return res.render("users.hbs", {
      users: userModel.getAll(),
    });
  },
  create: (req, res) => {},
  removeById: (req, res) => {},
};
