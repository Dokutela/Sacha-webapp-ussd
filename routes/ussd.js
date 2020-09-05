var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

router.use(bodyParser.json())

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('USSD API GATEWAY');
});

router.post('/', function(req, res, next) {
  let {sessionId, serviceCode, phoneNumber, text} = req.body
  if (text == '') {

      let response = `CON hello ${phoneNumber}
      Are you currently taking your medication as prescribed?
      1. Yes, I take it as prescribed every day
      2. I try, but I sometimes forget
      3. No, I stopped taking them`
      res.send(response)

  } else if (text == '1') {

      let response = `CON Do you still having problem?
      1. Yes, sometimes
      2. No`
      res.send(response)
  } else if (text == '1*1') {

      let response = `END We request you to answer few more questions`
      res.send(response)
  } else if (text == '1*2') {

      let response = `END Thank you for using our service`
      res.send(response)

  } else if (text == '2') {

      let response = `END In the last month, how often did you forget?
      1. Once
      2. Once a week
      3. More than twice a week
      4. Most days of the week`
      res.send(response)

  } else if (text == '3') {

      let response = `END Why?
      1. I ran out of medication to take
      2. I no longer need it
      3. I don’t want to
      4. I am healthy`
      res.send(response)

  } else {
      res.status(400).send('Bad request!')
  }
});

module.exports = router;
