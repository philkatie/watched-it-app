const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/movies.js');

// router.get('/movies', moviesCtrl.getMovies)
// router.post('/movies/:id/add', moviesCtrl.addMovie)
// router.delete('/movies/:id/remove', moviesCtrl.removeMovie)
router.post('/', moviesCtrl.create);
// router.get('/', moviesCtrl.index);

module.exports = router;