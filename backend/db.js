const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'Mac34tto87~!',
    database: 'myapp'
});
exports.pool = pool;