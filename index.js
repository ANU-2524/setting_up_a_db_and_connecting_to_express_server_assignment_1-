const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
//const { resolve } = require('path');

const app = express();
const port = 3010;

//app.use(express.static('static'));
mongoose.connect(process.env.MONGO_URL , {
  useNewUrlParser: true ,
  useUnifiedTopology: true ,
})
.then(()=> console.log("Connected to MongoDB Database"))
.catch((error) => {
  console.log("Error connecting to database: " + error.message);
});

app.get('/', (req, res) => {
  //res.sendFile(resolve(__dirname, 'pages/index.html'));
  res.send("Customer Management System is Running.");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
