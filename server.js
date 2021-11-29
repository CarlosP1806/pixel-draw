// Dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Setup application
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to paintings database
mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const Painting = require('./models/Painting');

app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Homeroute: render new painting view
app.get('/', (req, res) => {
    res.render('paint-edit');
});

// POST route to save a new painting to db
app.post('/new', async (req, res) => {
    const value = req.body;
    try {
        const painting = await Painting.create(value);
        res.status(200).json(painting);
    } catch(error) { 
        res.status(500).json({message: error});
    }
});

// GET route to display a painting
app.get('/:id', async (req, res) => {
    try {
        const painting = await Painting.findById(req.params.id);
        res.status(500).render('paint-display', { painting });
    } catch(error) {
        res.status(404).redirect('/'); // No painting found
    }
});

app.listen(PORT);