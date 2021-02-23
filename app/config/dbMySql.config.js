const ISOLATION_LEVEL = require('tedious').ISOLATION_LEVEL;

module.exports = {
   HOST: "1",//"142.93.41.92",
   USER: "1",//"root",
   PASSWORD: "1",//"$$$charlie1911",
   DB: "1",//"dashboard",
   OPTIONS: {
     encrypt: true,
     enableArithAbort: true,
     connectionIsolationLevel: ISOLATION_LEVEL.READ_UNCOMMITTED,
   },
};
