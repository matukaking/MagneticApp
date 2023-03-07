const express = require("express");
const sql = require("mssql");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/home", (req, res) => {
  res.send("Hello, world!");
});
// Configuration object for connecting to the database
var config = {
  server: "", //update me
  authentication: {
    type: "default",
    options: {
      userName: "", //update me
      password: "?!", //update me
    },
  },
  options: {
    // If you are on Microsoft Azure, you need encryption:
    encrypt: true,
    database: "magneticdatabase", //update me
  },
};

app.get("/page/:link", function (req, res) {
  const link = req.params.link;
  console.log(link);
  const resultsPromise = connectAndQuery(link);
  resultsPromise.then(function (results) {
    res.render("../src/index");
  });
});

async function connectAndQuery(link) {
  try {
    var poolConnection = await sql.connect(config);
    console.log("Sikerült elérni az adatbázis Kityo letsgooo");

    var resultSet = await poolConnection
      .request()
      .query(`SELECT * FROM user_table WHERE userid = '${link}'`);

    console.log(resultSet);
    if (resultSet.recordset.length > 0) {
      console.log("Hello");
      poolConnection.close();
      return 1;
    } else {
      console.log("Nem Hello");
      poolConnection.close();
      return 0;
      // If the query does not return a row, render an error page
    }
    // close connection only when we're certain application is finished
  } catch (err) {
    console.error(err.message);
  }
}

app.listen(3000, () => console.log("Server listening on port 3000"));
