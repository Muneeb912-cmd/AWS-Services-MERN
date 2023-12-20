const db = require('../config/database');
const fs = require('fs');
const path = require('path');

class ApisController {
    async addNewScreen(req, res) {
        try {
            const {
                componentName,
                route,
                validationRequired,
                selectedFile,
            } = req.body;

            // read file content
            const filePath = path.join(__dirname, '..', '..', 'src', 'components', 'screens', selectedFile);
            const fileContent = fs.readFileSync(filePath, 'utf8');

            // Assuming you have a table named 'screens' in your database
            const query = `
        INSERT INTO screens (componentName, route, validationRequired, selectedFile, fileContent)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;

            const values = [
                componentName,
                route,
                validationRequired,
                selectedFile,
                fileContent,
            ];

            const newScreen = await db.one(query, values);
            res.json(newScreen);
        } catch (error) {
            console.error('Error creating data:', error);
            res.status(500).json({ error: 'Failed to create data' });
        }
    }

    async getAllNewScreens(req, res) {
        try {
            // Assuming you have a table named 'screens' in your database
            const screens = await db.any('SELECT * FROM screens');
            res.json(screens);
        } catch (error) {
            console.error('Error reading data:', error);
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    }

    async deleteScreen(req, res) {
        try {
            const { screenId } = req.params;

            // Assuming you have a table named 'screens' in your database
            const result = await db.result('DELETE FROM screens WHERE id = $1', [
                screenId,
            ]);

            if (result.rowCount === 1) {
                res.json({ message: 'Screen deleted successfully' });
            } else {
                res.status(404).json({ error: 'Screen not found' });
            }
        } catch (error) {
            console.error('Error deleting data:', error);
            res.status(500).json({ error: 'Failed to delete data' });
        }
    }

    // Add similar methods for gallery operations
}

module.exports = new ApisController();
