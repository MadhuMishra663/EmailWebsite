const express = require('express');
const router = express.Router();
const replyController = require('../controllers/replyController');

router.post('/:thread_id', replyController.sendReply);

module.exports = router;
