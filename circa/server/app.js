require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const userrouter = require("./routes/user-routes");
const wokerrouter = require("./routes/worker-routes")
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const port = 5000



app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());







app.use("/user", userrouter);
app.use("/worker",wokerrouter)





mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    try {
      console.log("DataBase connected successfully")
      app.listen(port, () => {
          console.log(`Server connected to http://localhost:${port}`)
      })
  } catch (error) {
      console.log('Cannot start the server')
  }
  }).catch(error => {
    console.log('invalid database connection')
})

