const express = require('express');
const router = express.Router();
const oneboxController = require('../controllers/oneboxController');

router.get('/list', oneboxController.getAllThreads);
router.delete('/:thread_id', oneboxController.deleteThread);

module.exports = router;
