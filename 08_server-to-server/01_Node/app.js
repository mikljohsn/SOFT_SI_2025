import express from 'express';

const app = express();
const PORT = 8080;




app.get('/expressData', (req, res) => {
    res.send({ data: 'This is the data from Express' }); // This is a JS object but is sent as JSON stringified
    // res.send('This is the data from Express'); // This is JSON

})


// gets the data from the fastAPI endpoints
app.get('/requestFastAPIData', async (req, res) => {
    const response = await fetch('http://127.0.0.1:8000/fastapiData') //first promise unwraps the network request
    const result = await response.json(); //second promise unwraps the data

    res.send({data: result.data})
});

app.get('/names/:name', (req, res) => {
    console.log(req.params.name);
    res.send({data: `Your name is ${req.params.name}`});
});
app.get('/food/:food', (req, res) => {
    console.log(req.params.name);
    res.send({data: `You like ${req.params.food}`});
});
app.get('/', (req, res) => {
    res.send({data: "Go to /food/{food} Go to names/{name}"})
});
app.get('/pokemon/:name', async (req, res) => {
    const { name } = req.params.name;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const result = await response.json();
    
    res.send({data: result})
})

app.listen(PORT, () => console.log(`Server started on port: `, PORT));
