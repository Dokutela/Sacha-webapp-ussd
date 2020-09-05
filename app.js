var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');


var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var signinRouter = require('./routes/signin');
var signupRouter = require('./routes/signup');
// var authRouter = require('./routes/auth');


var ussdRouter = require('./routes/ussd');
var blogRouter = require('./routes/blog');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var ussdappRouter = require('./routes/ussdapp');
var dashRouter = require('./routes/dashboard');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/ussd',  ussdRouter);
app.use('/signin',  signinRouter);
app.use('/signup',  signupRouter);


// app.use('/auth',  authRouter);
app.use('/dashboard', dashRouter);

app.use('/blog', blogRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/ussdapp', ussdappRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
