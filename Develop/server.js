const express = require("express"); //requring express 
const logger = require("morgan"); // requireing middleware
const mongoose = require("mongoose"); //requiring mongoose package


const PORT = process.env.PORT || 3000; 

const db = require("./models"); //requiring mongoose schemas
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

//Requiring in the routes

require("./routes/api-routes.js")(app)
require("./routes/html-routes.js")(app)


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});