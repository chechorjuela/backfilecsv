const responseLoggerMiddleware = (req, res, next) => {
  // attach a listener to the 'finish' event of the response object
  res.on('finish', () => {
    console.log(`${req.method} ${req.url} => ${res.statusCode}`);
  });

  // call the next middleware in the chain
  next();
};

module.exports = {
  responseLoggerMiddleware
}