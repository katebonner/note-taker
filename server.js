const express = require('express');
const {notes} = require('./data/notes')
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/animals', (req, res) => {
    res.json(animals);
})

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`)
})