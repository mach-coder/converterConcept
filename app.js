const path = require('path'),
      createError = require('http-errors'),
      express = require('express'),
      cookieParser = require('cookie-parser'),
      http = require('http'),
      logger = require('morgan'),
      socket = require('socket.io'),
      handlebars = require('express-handlebars'),
      converter = require('./controllers/converter'),
      indexRouter = require('./routes/index'),
      usersRouter = require('./routes/users'),
      apiRouter = require('./routes/api'),
      app = express(),
      server = http.createServer(app);

app.set('views', path.join(__dirname, 'views'))
  .set('view engine', 'handlebars').engine('handlebars', handlebars({ layoutsDir: __dirname + '/views/layouts'}))
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, 'public')))


  .use('/', indexRouter)
  .use('/users', usersRouter)
  .use('/api', apiRouter)


  .use((req, res, next)  => next(createError(404) ) )
  .use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('errors/error');
  });

server.listen(3000, () => {
  console.log('app start at http://127.0.0.1:3000');
})
// var io = socket(server);
const io = new socket.Server(server, { /* options */ });

io.on('connection', function(socket){
  console.log('made socket connection', socket.id);

  // Handle converting event
  
  socket.on('converting', function(data){
      console.log(data);
      io.sockets.emit('converting', {
        message: converter.converter('ar', data.message)
      });
  });
});


module.exports = app;
