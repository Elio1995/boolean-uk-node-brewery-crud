
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3001;

const breweriesRouter = require("./resources/breweries/routes")
const toursRouter = require("./resources/tours/routes")

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());


app.use("/breweries", breweriesRouter)
app.use("/tours", toursRouter)


app.listen(port, () => {
    console.log("request received");
  });