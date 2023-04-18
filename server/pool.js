import pg from 'pg'
import dotenv from 'dotenv'
// const Pool = require('pg').Pool;
// require('dotenv').config();
dotenv.config();

export default new pg.Pool({
  connectionString: process.env.DATABASE_URL
})       

