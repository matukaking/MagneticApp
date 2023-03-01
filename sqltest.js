const sql = require("mssql");

const config = {
  user: "matukityoadmin", // better stored in an app setting such as process.env.DB_USER
  password: "MatuKityo2023?!", // better stored in an app setting such as process.env.DB_PASSWORD
  server: "magnetickiszolgalo.database.windows.net", // better stored in an app setting such as process.env.DB_SERVER
  port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
  database: "magneticdatabase", // better stored in an app setting such as process.env.DB_NAME
  authentication: {
    type: "default",
  },
  options: {
    encrypt: true,
  },
};

console.log("Starting...");
connectAndQuery();

async function connectAndQuery() {
  try {
    var poolConnection = await sql.connect(config);
    console.log("Sikerült elérni az adatbázis Kityo letsgooo");
    const link = "058ab340-52d6-4b6a-bffc-b2d0cdee6d56";
    var resultSet = await poolConnection
      .request()
      .query(`SELECT * FROM user_table WHERE userid = '${link}'`);

    console.log(`${resultSet.recordset.length} rows returned.`);

    console.log(resultSet.length);
    // close connection only when we're certain application is finished
    poolConnection.close();
  } catch (err) {
    console.error(err.message);
  }
}
