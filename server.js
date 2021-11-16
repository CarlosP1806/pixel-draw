// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('paint-edit');
});

app.listen(PORT);