//to override the default errorHandler .. just pass err, req, res, next (to call the next middleware) to the func
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);
  res.json({
    message: err.message,
    //for additional info in dev mode
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = { errorHandler };
