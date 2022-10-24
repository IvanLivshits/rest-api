const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true
}).promise();

module.exports = db;