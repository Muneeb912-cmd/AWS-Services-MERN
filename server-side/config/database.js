const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin_d_mis_db',
  host: 'd-mis-db.postgres.database.azure.com',
  database: 'postgres',
  password: 'password123?',
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Use this line to avoid self-signed certificate errors
  },
});

module.exports = pool;
