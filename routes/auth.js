var express = require('express');
var router = express.Router();
var { pool } = require('./dbConfig');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('auth');
});

router.post('/form2', function (req, res, next) {
  let {fname, lname,telphone, email, password1, password2} = req.body;
  console.log("------signup-----");
  console.log(req.body);

  let errors = [];
  if (password1.length < 6){
    errors.push({message : "Password should be atleast 6 charecters"});
  }
  if (telphone.length < 11){
    errors.push({message : "Number should be atleast 10 charecters"});
  }
  if (password1 != password2){
    errors.push({message : "Password do not match"});
  }

  // error: not able to render form validation
  // error level 5
  if (errors.length > 0){
    // res.redirect('/auth');
    res.render("auth", { errors, fname, lname, telphone, email, password1, password2})
  }
});

router.post('/form1', function (req, res, next) {
  let {tel, password} = req.body;
  console.log("------login-----");
  console.log(req.body);
  res.redirect('/');
});


module.exports = router;
