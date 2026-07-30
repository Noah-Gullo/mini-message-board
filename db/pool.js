const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: String(process.env.CONNECTION_STRING)
});