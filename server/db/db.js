const mysql = require('mysql2');
const config = require('../config/config');

const connection = mysql.createConnection(config.db);

connection.connect(function(err) {
    if (err) throw err;
    
    console.log("Connected!");
    var sql = `Select * From ${config.db.database}.User;`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("All Users : ", result);
      
    });
  });
  
  module.export = {mysql};