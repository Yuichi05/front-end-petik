const Sequelize = require("sequelize");

const db = new Sequelize("auth_db", "Yusuf", "12345", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
