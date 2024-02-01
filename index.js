
import dotenv from "dotenv";
import connect from "./src/utils/conn.js";
import app from "./app.js";
dotenv.config({
  path: "./.env",
});

connect()
  .then(() => {
    app.listen(process.env.PORT, (req, res) => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message," : database connection failed");
  });
