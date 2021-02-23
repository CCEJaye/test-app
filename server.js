const express = require("express");
const parser = require("body-parser");

const app = express();

// application/json requests
app.use(parser.json());

// application/x-www-form-urlencoded requests
app.use(parser.urlencoded({ extended: true }));

require("./app/routes/test.routes.js")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}.`);
});
