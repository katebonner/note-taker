// IMPORT PACKAGES & MODULES
const express = require('express');
const fs = require('fs');
const path = require('path');
const uuid = require('./helpers/uuid')

// IMPORT DATA
const notesList = require('./data/notes')

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

// API ROUTE TO RETURN ALL SAVED NOTES AS JSON
app.get('/api/notes', (req, res) => {
    res.json(notesList);
});

// ROUTE TO RETURN THE INDEX.HTML FILE
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, './public/index.html'));
});

// API ROUTE TO RECEIVE A NEW NOTE
app.post('*', (req, res) => {
    console.info(`${req.method} request received to add a note`)
    
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        notesList.push(newNote);
        fs.writeFileSync(path.join(__dirname, './data/notes.json'), JSON.stringify(notesList));
    
        const response = {
            status: 'success',
            body: newNote
        };
        console.log(response);
    }
    else {
        res.json('error in posting review')
    }
});

// app.delete('/api/notes/:id', (req, res) => {
//     const noteId = req.params.id;
    
//     for (let i = 0; i < reviews.length; i++) {
//         const currentNote = req.body
//     }
// })

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`)
})