const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');

const mediaHandler = require('./handler/media');

router.post('/', mediaHandler.create);
router.get('/', verifyToken, mediaHandler.getAll);
router.delete('/:id', mediaHandler.destroy);



module.exports = router;