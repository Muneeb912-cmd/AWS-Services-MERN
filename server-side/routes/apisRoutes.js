const express = require('express');
const router = express.Router();
const apisController = require('../controllers/apisController');

router.post('/url', apisController.addNewScreen);
router.get('/url', apisController.getAllNewScreens);
router.delete('/url/:screenId', apisController.deleteScreen);

// Add similar routes for gallery operations

module.exports = router;
