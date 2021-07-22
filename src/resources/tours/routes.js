let tourObj = [
    {
      id: 1,
      breweryId: 9094,
      numberPeople: 2,
      date: "13/01/2021",
    },
    {
      id: 2,
      breweryId: 9242,
      numberPeople: 3,
      date: "22/08/2021",
    },
  ];
  
  const express = require("express");
  const toursRouter = express.Router();
  
  toursRouter.get("/", (req, res) => {
    res.json({ tourDB: tourObj });
  });
  
  toursRouter.get("/:id", (req, res) => {
      const tourId = Number(req.params.id)
    let filteredTour = tourObj.find(
      (target) => target.id === tourId
    );
    if (!filteredTour) res.json({ Error: `ID:${req.params.id} Not found` });
    res.json({ filteredTour });
  });
  
  toursRouter.post("/", (req, res) => {
    tourObj = [...tourObj, req.body];
    const response = {
      route: req.originalUrl,
      method: req.method,
      body: req.body,
    };
  
    res.json({ response });
  });
  
  
  module.exports = toursRouter;
  