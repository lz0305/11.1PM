var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var con=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"lizhen"
});

/* GET home page. */
router.post('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    console.log(req.body)
    var a=req.body.type;
    var b=req.body.con;
    con.query(`SELECT * FROM search WHERE ${a} LIKE '${b}%' OR ${a} LIKE '%${b}' OR ${a} LIKE '%${b}%'`,function (err, rows, fields) {
      console.log(rows);
        res.send(rows)
    })
});

module.exports = router;
