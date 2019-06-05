const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const server = express();
const cohortRouter = require("./data/routes/cohortRouter");
const studentRouter = require("./data/routes/studentRouter");
const port = process.env.port || 8000;

server.use(helmet(), logger("tiny"), express.json());

server.use("/api/cohorts", cohortRouter);
server.use("/api/students", studentRouter);

server.listen(port, () => {
  console.log(`Server is running live on ${port}`);
});
