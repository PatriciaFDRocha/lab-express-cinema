const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model');


router.get('/movies', async (req, res)=> {
  try {
    const moviesFromDB = await Movies.find();
    console.log(moviesFromDB);
    res.render('movies', {moviesFromDB});
  }catch(e) {
    res.render('error');
    console.log(`An error cocurred ${e}`);
  }
});

router.get('/movies/:id', async (req, res) => {
  const movie = await Movies.findById(req.params.id);
  console.log(movie);
  res.render('movie-details', movie);
});

module.exports = router;