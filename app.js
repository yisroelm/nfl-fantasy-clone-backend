const express = require("express");
const app = express();
app.use("/", (req, res) => res.send({welcome: "trying again..."}))
app.listen(7000, () => console.log("server"));
