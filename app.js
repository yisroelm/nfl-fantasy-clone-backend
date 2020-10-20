import express from "express";
const app = express();

app.use("/", (req, res) => res.send("<h1>Heyyy</h1>"));

app.listen(3000, () => console.log("server running.... good"));
