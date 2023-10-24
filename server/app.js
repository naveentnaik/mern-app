const express = require("express");
const cookieParser=require("cookie-parser")
const cors=require('cors')
const app = express();
const dotenv = require("dotenv");
const { urlencoded } = require("express");
dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require("./model/userSchema");
app.use(express.json())
app.use(urlencoded({extended:false}))
app.use(cors())
app.use(cookieParser())

app.use(require('./router/auth'))

const PORT = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("hello from backend");
// });





app.listen(PORT, () => {
  console.log("server is running");
});
