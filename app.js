const express = require("express");
const db = require("./db/connect");
const members = require("./routers/members");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api/v1/members", members);

const port = process.env.PORT || 5000;

const load = async () => {
  try {
    console.log(process.env.MONGO_URI);
    await db(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Site is listening in port http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

load();
