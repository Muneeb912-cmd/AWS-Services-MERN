const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

router.post('/gallery-url', galleryController.addNewGalleryItem);
router.get('/gallery-url', galleryController.getAllGalleryItems);
router.put('/gallery-url/:itemId', galleryController.updateGalleryItem);
router.delete('/gallery-url/:itemId', galleryController.deleteGalleryItem);

module.exports = router;
