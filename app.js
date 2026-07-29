const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
app.use(cors());
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://bible-api.com/data/almeida/random",
    );
    res.json(response.data.random_verse);
  } catch (e) {
    console.error(e);
  }
});

app.listen(3000, () => {
  console.log("server ON");
});

module.exports = app;
