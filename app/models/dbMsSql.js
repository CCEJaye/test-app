const msSql = require("mssql");
const msSqlConfig = require("../config/dbMySql.config.js");

module.exports = new msSql.ConnectionPool({
   server: msSqlConfig.HOST,
   user: msSqlConfig.USER,
   password: msSqlConfig.PASSWORD,
   database: msSqlConfig.DB
});