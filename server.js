const express = require('express');
const {animals} = require('./data/animals.json')

const app = express();

app.get('/api/animals', (req, res) => {
    res.json(animals);
})

app.listen(3001, () => {
    console.log('SERVER LISTENING ON PORT 3001')
})