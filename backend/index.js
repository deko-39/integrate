const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/ping", async (req, res) => {
  try {
    res.status(200).send("PONG");
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const token = "token";
    res.send(token);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000);
console.log("Server is running");
