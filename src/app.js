const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser"); 
const catchError = require("http-errors");
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/userRouter");

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too may requests from this IP . Please Try again later",
});

//========= middleware =======
app.use(morgan("dev")); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ========== All Routes ===========
app.use('/api/users', userRouter) ;








app.get("/", (req, res) => {
  res.send(`server is running at port ${PORT}`);
});


//========= Error Handling =========
app.use((req, res, next) => {
  next(catchError(404, "client route Not found"));
});
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
