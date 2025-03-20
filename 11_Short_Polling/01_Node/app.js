import express from 'express';

const app = express();

app.use(express.static('public')); //use static files in ROOT/public folder like html, images, etc.

const randomNumbers = [1, 25, 574];

app.get('/randomnumbers', (req, res)=> {
    res.send({ data: randomNumbers }); //send as JSON
})

app.get('/simulatenewnumbers', (req, res) => { 
    const newNumber = getRandomInt(1, 1000);
    randomNumbers.push(newNumber);

    res.send({ data: newNumber });
 });  

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});