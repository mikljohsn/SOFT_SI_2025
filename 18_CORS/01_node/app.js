import express from 'express';
const app  = express();

import cors from 'cors'; // cors is needed to enable CORS and allow cross-origin requests
// app.use(cors()) //no options, so all origins, methods and headers are allowed


/* app.use(cors({
    origin: '*', // only this origin is allowed to access the API
    methods: ['GET'], // only these methods are allowed
    allowedHeaders: ['Content-Type', 'Authorization'] // only these headers are allowed
})) */


app.use((req, res, next) => { // manually setting CORS headers
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/timestamp',/* cors()*/ (req, res) => {
    res.send({ data: new Date().toISOString() });
});

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});