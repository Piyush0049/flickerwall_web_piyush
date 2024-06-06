const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const screenRoutes = require('./Routes/ScreenRoute');

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/screens', screenRoutes);

app.get("/", (req, res) => {
    res.send("The server is working");
});

module.exports = app;
