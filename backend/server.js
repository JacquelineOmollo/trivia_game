const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");
const quiz = require("./data/quiz.js")
const app = express();

app.use(bodyParser.json());
app.use(CORS());

app.get("/", (req, res) => {
    res.send("API is running")
})

app.get("/api/quiz", (req, res) => {
    res.json(quiz)
})

app.get("/api/quiz/id", (req, res) => {
    const questions = quiz.find(q => q.id === req.params.id)
    res.json(questions)
})


app.listen(8000, () => {
    console.log("Server is listening on port 8000 ")
})