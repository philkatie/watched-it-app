const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/movies.js');

// load home page with imdb's top 250 movies
router.get('/', moviesCtrl.top250);

module.exports = router;