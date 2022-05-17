const express = require("express");
const serverless = require("serverless-http");
const { tabs, plugins } = require("./data");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "welcome to my backend server",
  });
});

router.get("/plugins", function (req, res) {
  // ...
  res.json(plugins);
});

router.get("/tabs", function (req, res) {
  // ...
  res.json(tabs);
});

router.put("/tabs", function (req, res) {
  // ...
  const { path, tab } = req.body;

  tabs[path] = tab;
  res.json(tab);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
