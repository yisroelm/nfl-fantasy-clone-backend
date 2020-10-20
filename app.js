import express from "express";
const app = express();

app.use("/", (req, res) => res.send("<h1>Heyyy</h1>"));
