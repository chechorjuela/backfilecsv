const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('../application/routes');
const apiError = require('../app/errors/apiError');
const cors = require('cors');
const {requestLoggerMiddleware} = require("../app/errors/logRequest");
const {responseLoggerMiddleware} = require("../app/errors/showResponse");
require('dotenv').config();
require('./swagger.config')(app);
const allowedOrigins = ['http://localhost:3000/'];
const corsOpts = {
  origin: allowedOrigins,
  methods: [
    'GET',
    'POST',
  ],
  allowedHeaders: [
    'Content-Type',
  ],
};

const startServer = () => {
  const port = process.env.PORT || 5050;
  app.listen(port, () => {
    console.log('Example app listening on port ' + port)
  })
}
app.use((err, req, res, next) => {
  if (err instanceof apiError.ApiError) {
    return res.status(err.code).json({message: err.message});
  }
  return res.status(500).json({message: 'Something went wrong'});
});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.removeHeader('x-powered-by');
  res.setHeader('Access-Control-Allow-Methods','POST');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  next();
});
app.use(cors(corsOpts));
app.use(requestLoggerMiddleware);
app.use(responseLoggerMiddleware);
app.use('/api', routes)
app.use((req, res, next) => {
  if (req.url === '/') {
    res.redirect('/api-docs');
  } else {
    next();
  }
});
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.all('*', (req, res) => {
  res.status(404).json({error: `Path ${req.path} not found`});
});

module.exports = startServer