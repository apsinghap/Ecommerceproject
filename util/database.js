const mysql = require('mysql2');
const pool =mysql.createPool({
    host:'localhost',
    usernamme:'root',
    password:'hhhhh'
})
module.exports=pool.promise();