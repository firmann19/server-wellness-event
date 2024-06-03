var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var app = express();

// Import router
const userRouter = require("./app/api/user/router");
const eventCategoryRouter = require("./app/api/eventCategory/router");
const purposedDateRouter = require("./app/api/purposed_date/router");
const wellnessEventRouter = require("./app/api/wellnessEvent/router");
const vendorRouter = require("./app/api/vendor/router");
const dashboardRouter = require("./app/api/dashboard/router");

// middlewares
const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handler-error");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to api WorkOrder",
  });
});

// gunakan router
app.use(userRouter);
app.use(eventCategoryRouter);
app.use(purposedDateRouter);
app.use(wellnessEventRouter);
app.use(vendorRouter);
app.use(dashboardRouter);

// middlewares
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
