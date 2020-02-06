// Base code used from Section 14, Activity 12 in class

// Dependencies

// Requiring our burger model
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers/", (req, res) => {
    db.Burger.findAll({})
      .then (allBurgers => {
        res.json(allBurgers);
      });
  });

// POST route for adding new burgers
  app.post("/api/burgers/", async function(req, res){
      const burger = await db.Burger.create({burger_name = req.body.burger_name});
      res.json(burger);
  });

    // PUT route for updating (devouring) posts
  app.put("/api/burgers/:id", async function(req, res) {
    
    const devourThisBurger = await db.Burger.update({devoured: true}, {where: {id: req.params.id} })
    res.json(devourThisBurger);
    
  });
};
