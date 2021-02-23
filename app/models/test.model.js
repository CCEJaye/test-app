const mySql = require("./dbMySql.js");
const msSql = require("./dbMsSql.js");

const Tests = function (test) {
   this.col1 = test.col1;
   this.col2 = test.col2;
   // etc.
};

Tests.QueryMySql = (param, onComplete) => {
   mySql.query(`SELECT * FROM table WHERE col = ${param}`, (err, res) => {
      if (err) {
         console.log("error: ", err);
         onComplete(err, null);
         return;
      }

      if (res.length) {
         console.log("results: ", res);
         onComplete(null, res);
         return;
      }

      onComplete({ error: "not_found" }, null);
   });
};

Tests.QueryMsSql = async (param, onComplete) => {
   let res;

   try {
      await msSql.connect();
      res = await msSql.request().query(`SELECT * FROM table WHERE col = ${param}`);
   } catch (err) {
      console.log("error: ", err);
      onComplete(err, null);
      return;
   }

   if (res.length) {
      console.log("results: ", res);
      onComplete(null, res);
      return;
   }

   onComplete({ error: "not_found" }, null);
};

module.exports = Tests;
