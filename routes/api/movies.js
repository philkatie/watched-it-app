const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/movies.js');
const multer = require('multer');
const upload = multer();

// router.get('/movies', moviesCtrl.getMovies)
// router.post('/movies/:id/add', moviesCtrl.addMovie)
// router.delete('/movies/:id/remove', moviesCtrl.removeMovie)
router.post('/', upload.single('photo'), moviesCtrl.create);
router.get('/', moviesCtrl.index);

module.exports = router;