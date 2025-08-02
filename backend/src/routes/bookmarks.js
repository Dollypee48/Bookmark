const express = require('express');
const router = express.Router();
const bookmarkController = require('../controllers/bookmarkController');
const auth = require('../middleware/auth');

router.get('/', auth, bookmarkController.getBookmarks);
router.post('/', auth, bookmarkController.addBookmark);
router.delete('/:id', auth, bookmarkController.deleteBookmark);

module.exports = router;