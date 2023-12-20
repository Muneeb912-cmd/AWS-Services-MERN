class GalleryController {
    async addNewGalleryItem(req, res) {
      try {
        const { image, caption } = req.body;
  
        // Assuming you have a table named 'gallery_items' in your database
        const query = `
          INSERT INTO gallery_items (image, caption)
          VALUES ($1, $2)
          RETURNING *;
        `;
  
        const values = [image, caption];
  
        const newGalleryItem = await db.one(query, values);
        res.json(newGalleryItem);
      } catch (error) {
        console.error('Error creating gallery item:', error);
        res.status(500).json({ error: 'Failed to create gallery item' });
      }
    }
  
    async getAllGalleryItems(req, res) {
      try {
        // Assuming you have a table named 'gallery_items' in your database
        const galleryItems = await db.any('SELECT * FROM gallery_items');
        res.json(galleryItems);
      } catch (error) {
        console.error('Error reading gallery items:', error);
        res.status(500).json({ error: 'Failed to fetch gallery items' });
      }
    }
  
    async updateGalleryItem(req, res) {
      try {
        const { itemId } = req.params;
        const { image, caption } = req.body;
  
        // Assuming you have a table named 'gallery_items' in your database
        const result = await db.result(
          'UPDATE gallery_items SET image = $1, caption = $2 WHERE id = $3',
          [image, caption, itemId]
        );
  
        if (result.rowCount === 1) {
          res.json({ message: 'Gallery item updated successfully' });
        } else {
          res.status(404).json({ error: 'Gallery item not found' });
        }
      } catch (error) {
        console.error('Error updating gallery item:', error);
        res.status(500).json({ error: 'Failed to update gallery item' });
      }
    }
  
    async deleteGalleryItem(req, res) {
      try {
        const { itemId } = req.params;
  
        // Assuming you have a table named 'gallery_items' in your database
        const result = await db.result('DELETE FROM gallery_items WHERE id = $1', [
          itemId,
        ]);
  
        if (result.rowCount === 1) {
          res.json({ message: 'Gallery item deleted successfully' });
        } else {
          res.status(404).json({ error: 'Gallery item not found' });
        }
      } catch (error) {
        console.error('Error deleting gallery item:', error);
        res.status(500).json({ error: 'Failed to delete gallery item' });
      }
    }
  }
  
  module.exports = new GalleryController();
  