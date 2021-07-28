const express = require("express");
const app = express();
const port = process.env.port || 5000;
const User = require("./models/User.model");
require('dotenv').config()

const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/hangouts-db";


mongoose
	.connect(MONGO_URI, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((x) =>
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`, process.env.MONGODB_URI)
	)
	.catch((err) => console.error("Error connecting to mongo", err));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/express_backend", (req, res) => {
	res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
}); // this will get the client side react app

app.get("/", (req, res) => {

	console.log("finding users");
	User.find()
		.then((response) => {
			console.log(response);
			res.send(response);
		})
		.catch((err) => console.log(err));
});

app.post('/create', (req, res)=> {
    User.create({
        username: 'bitch fucking work',
        password: 'asdf',
        email: 'asdf'
    })
    .then(newUser => {res.send(newUser)})
    .catch(err => console.log(err))
})


// app.get("/", (req, res) => {
// 	console.log("finding users");
// 	User.find()
// 		.then((users) => {
// 			console.log(users);
//             res.json(users);
// 		})
// 		.catch((err) => console.log(err));
// });