const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "54785478Ii%",
    database: "aero_rest_api",
    multipleStatements: true
}).promise();

module.exports = db;