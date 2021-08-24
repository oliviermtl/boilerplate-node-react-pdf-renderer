const express = require("express");
const path = require("path");
const cors = require("cors");
const { createPdf } = require("./createPdf");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.resolve(__dirname, "client")));

// Handling JSON datas
app.use(cors());
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(express.static(__dirname));

app.get("/", function (req, res) {
  createPdf()
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
});

app.listen(PORT).on("listening", () => {
  console.log(`🚀 we are live on port ${PORT}`);
});
