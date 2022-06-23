// IMPORT PACKAGES & MODULES
const express = require('express');
const fs = require('fs');
const path = require('path');

// IMPORT DATA
const notes = require('./data/notes')

// SPECIFY A PORT FOR THE APPLICATION
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// ROUTE TO RETURN THE NOTES.HTML FILE
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// ROUTE TO RETURN THE INDEX.HTML FILE
app.get('*', (req, res) => {
    //res.sendFile(path.join(__dirname, './public/index.html'));
});

// API ROUTE TO RETURN ALL SAVED NOTES AS JSON
app.get('/api/notes', (req, res) => {
    console.log(notes)
    res.json(notes);
});

// API ROUTE TO RECEIVE A NEW NOTE
app.post('*', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`)
})