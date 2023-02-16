const express = require("express"); 
const router = express.Router(); 

const movie = require("../model/models"); 

// Route to get all movies
router.get("/", (req, res) => {
  movie.find((err, result) => { 
    if(err) throw new Error(err); 
    res.json(result); 
  });
});

// Route to add a new movie
router.post("/", (req, res) => {
  movie.create(req.body, (err, result) => { 
    if(err) throw new Error(err); 
    res.json(result); 
  });
});


// Route to update a movie by id
router.put("/:id", (req, res) => {
  movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => { 
    res.json(result); 
  });
});

// Route to delete a movie by id
router.delete("/:id", (req, res) => {
  movie.findOneAndRemove({ _id: req.params.id }, (err, result) => {
      res.end();
  });
});

module.exports = router; 