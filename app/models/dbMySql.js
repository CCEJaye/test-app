const mySql = require("mysql");
const mySqlConfig = require("../config/dbMySql.config.js");

module.exports = mySql.createPool({
   host: mySqlConfig.HOST,
   user: mySqlConfig.USER,
   password: mySqlConfig.PASSWORD,
   database: mySqlConfig.DB
});