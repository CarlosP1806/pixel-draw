const mongoose = require('mongoose');

const paintingSchema = new mongoose.Schema({
    colorMatrix: {
        type: Array,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Painting', paintingSchema);