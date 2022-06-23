const express = require('express');
const {animals} = require('./data/animals.json')
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/animals', (req, res) => {
    res.json(animals);
})

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`)
})