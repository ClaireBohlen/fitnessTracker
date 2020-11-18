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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

// app.get("/", function(req,res){
//   res.sendFile(path.join(__dirname, "homework/MONGO/Develop/public/index.html"))
// })
// app.get("/exercise", function(req,res){
//   res.sendFile(path.join(__dirname, "homework/MONGO/Develop/public/exercise.html"))
// })
// app.get("/stats", function(req,res){
//   res.sendFile(path.join(__dirname, "homework/MONGO/Develop/public/stats.html"))
// })

app.get("/api/workouts", async function(req,res){
  const data = await db.Workout.find()
  res.json(data)
})

app.put("/api/workouts/:id", async function(req,res){
  var id = req.params.id
  var data = req.body
  const updated = await db.Workout.findByIdAndUpdate(id, {$push:{exercises: data}})
  res.json(updated)
})

app.post("/api/workouts", async function(req,res){
  const newWorkout = await db.Workout.create({})
  res.json(newWorkout)
})

app.get("/api/workouts/range", async function(req,res){
  const data = await db.Workout.find().limit(7)
  res.json(data)
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});