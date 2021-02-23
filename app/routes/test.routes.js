module.exports = app => {
   const tests = require("../controllers/test.controller.js");

   app.get("/", (req, res) => {
      res.json({ message: "Home page" });
   });

   app.get("/tests/mysql/:param", tests.queryMySql);

   app.get("/tests/mssql/:param", tests.queryMsSql);
};
