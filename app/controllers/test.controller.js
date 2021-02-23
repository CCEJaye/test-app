const Tests = require("../models/test.model.js");

exports.queryMySql = (req, res) => {
   Tests.QueryMySql(req.params.param, (err, data) => {
      if (err) {
         if (err.error === "not_found") {
            res.status(404).send({
               message: `No results found: ${req.params.param}`
            });
         } else {
            res.status(500).send({
               message: `Error retrieving result: ${req.params.param}`
            });
         }
         return;
      }
      res.send(data);
   });
};

exports.queryMsSql = (req, res) => {
   Tests.QueryMsSql(req.params.param, (err, data) => {
      if (err) {
         if (err.error === "not_found") {
            res.status(404).send({
               message: `No results found: ${req.params.param}`
            });
         } else {
            res.status(500).send({
               message: `Error retrieving result: ${req.params.param}`
            });
         }
         return;
      }
      res.send(data);
   });
};

