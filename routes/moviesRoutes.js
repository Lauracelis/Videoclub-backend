const express = require("express"); 
const router = express.Router(); 
const Movie = require("../model/models"); 


router.get("/", (req, res) => {
  Movie.find((err, result) => { 
    if(err) throw new Error(err); 
    res.json(result); 
  });
});


router.post("/", (req, res) => {
  Movie.create(req.body, (err, result) => { 
    if(err) throw new Error(err); 
    res.json(result); 
  });
});


router.put("/:id", (req, res) => {
  Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => { 
    res.json(result); 
  });
});


router.delete("/:id", (req, res) => {
  Movie.findOneAndRemove({ _id: req.params.id }, (err, result) => {
      res.end();
  });
});

module.exports = router; 