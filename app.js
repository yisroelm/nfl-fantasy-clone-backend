const express = require("express");
const userRoute = require("./app/routes/userRoute");

const app = express();

app.use("/api/user", userRoute);
app.use("/", (req, res) => res.send("<h1>Heyyy</h1>"));
app.listen(3000, () => console.log("server running... good"));
