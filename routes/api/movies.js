const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/movies.js');
const multer = require('multer');
const upload = multer();

router.post('/', upload.single('photo'), moviesCtrl.create);
router.get('/', moviesCtrl.index);

module.exports = router;