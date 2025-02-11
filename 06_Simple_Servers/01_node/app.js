import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send({data : "Hello World"});
});

app.get("/greetings", (req, res) => {
    res.send({data : "greetings"});
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});