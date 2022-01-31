const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'lista_personas',
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;
