// Base code used from Section 14, Activity 12 in class

// Dependencies

// Requiring our burger model
const db = require("../models");
// const express = require("express")
// const app = express();
// const axios = require("axios");

// Router coding referenced from Stack Overflow
const router = require('express').Router();

// Routes
// =============================================================
// module.exports = function(app) {

  // GET route for getting all of the burgers
  router.get("/api/burgers/", (req, res) => {
    db.Burger.findAll({})
      .then (allBurgers => {
        res.json(allBurgers);
      });
  });

// POST route for adding new burgers
  router.post("/api/burgers/", async function(req, res){
      const burger = await db.Burger.create({burger_name: req.body.burger_name});
      res.json(burger);
  });

    // PUT route for updating (devouring) posts
  router.put("/api/burgers/:id", async function(req, res) {
    
    const devourThisBurger = await db.Burger.update({devoured: true}, {where: {id: req.params.id} })
    res.json(devourThisBurger);
    
  });

  module.exports = router;
