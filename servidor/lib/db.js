const mySql = require('mysql')

var connection = mySql.createConnection({
    host     : 'localhost', 
    port     : '3306',
    user     : 'root',
    password : 'ILcapo123',
    database : 'competencias'
})

module.exports = connection