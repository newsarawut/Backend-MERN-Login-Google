const express = require("express");

const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//DB 
const connectDB = require('./config/db')

const { readdirSync } = require('fs')
//Router
const authRoute = require('./Routes/auth')

//app
const app = express();

//db
connectDB();

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "20mb" }));
app.use(cors())


// Routes
 // 1
//  app.get('/roitai', (req, res) => {
//     res.send('Hello')
//  })

// 2
// app.use('/api', authRoute)

// 3 auto
readdirSync('./Routes')
.map((r) => app.use('/api', require("./Routes/" + r)))





// Run Server
const port = 4000;
app.listen(port, () => console.log("Server is running on PORT " + port));
