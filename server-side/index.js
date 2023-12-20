const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apisRoutes = require('./routes/apisRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const db = require('./config/database');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Connect to the database
db.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });

// Routes
app.use('/apis', apisRoutes);
app.use('/gallery', galleryRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
