const express = require('express');
const router = express.Router();
const watchesCtrl = require('../../controllers/watches')

router.post('/posts/:id/watches', watchesCtrl.create)
router.delete('/watches/:id', watchesCtrl.deleteWatch)

module.exports = router;