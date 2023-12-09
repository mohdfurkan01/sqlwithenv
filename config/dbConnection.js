const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: './config/.env'})

const my_database = mysql.createConnection({
    host: process.env.DTATBASE_HOST,
    user: process.env.DTATBASE_USER, 
    password: process.env.DTATBASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });

  module.exports = my_database;