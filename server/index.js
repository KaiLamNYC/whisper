const express = require("express");
const app = express();

const PORT = 3000;
//CORS STUFF
const cors = require("cors");

//MIDDLEWARE STUFF
const logger = require("morgan");
const connectToMongoDB = require("./database/mongodb");

require("dotenv").config();

//CORS STUFF
app.use(
	cors({
		origin: process.env.CLIENT_URL,
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);

//LOG REQUESTS IN TERMINAL WITH MORGAN
app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//ROUTES

//USER ROUTER
const userRouter = require("./routes/userRouter");
app.use("/user", userRouter);

app.listen(PORT, () => {
	console.log(`beep boop server on ${PORT}`);

	//database connection
	connectToMongoDB();
});
