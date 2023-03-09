const express = require('express')
const dotenv = require('dotenv')
// const cors = require('cors')
// const cookieParser = require('cookie-parser')

dotenv.config();
console.log('NODE_ENV:', process.env.NODE_ENV);
const jwtSecret = process.env.JWT_SECRET

const app = express();
// app.use(cors({
//   credentials: true,
// }));
app.use(express.json());
// app.use(cookieParser())


app.use(express.static('dist'))

app.get('/test', (req, res) => {
  res.send('ok /test')
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

  app.listen(9000, '0.0.0.0', () => {
    console.log("App is running at http://localhost:9000");
  });

// exports.main_handler = main_handler