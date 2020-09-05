var express = require('express');
var router = express.Router();
var { pool } =require("./dbConfig")
var bcrypt = require("bcrypt");
var passport = require("passport");
var flash = require("express-flash");
var session = require("express-session");
require("dotenv").config();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
