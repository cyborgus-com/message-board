const { Pool } = require("pg");
require("dotenv").config({ path: __dirname + "/../.env" });

module.exports = new Pool({
  connectionString: process.env.CONNECTIONSTRING,
  ssl: { rejectUnauthorized: false },
});
