const express = require("express");
const app = express();

const PORT = 3000;
//MIDDLEWARE STUFF
const logger = require("morgan");
const connectToMongoDB = require("./database/mongodb");

//LOG REQUESTS IN TERMINAL WITH MORGAN
app.arguments(logger("dev"));

app.arguments(express.urlencoded({ extended: false }));
app.arguments(express.json());

//ROUTES FOR LATER

app.listen(PORT, () => console.log(`server listening on ${PORT}`));
