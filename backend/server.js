const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const TaskRoute = require("./routes/TaskRoute");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "secret",
  })
);

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Jeev@1366289",
  database: "100percentpure",
});
app.get("/", (req, res) => {
  db.getConnection((err) => {
    if (err) {
      throw err;
    } else {
      res.send("Connected to movie_industry Database");
      console.log("Database Connected");
    }
  });
});
app.use("/", TaskRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
