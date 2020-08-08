const { Pool } = require("pg");

const PGURI = `postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`;

const pool = new Pool({ connectionString: PGURI });

module.exports = pool;
