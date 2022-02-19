const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

    titulo: {
        type: String,
        required: true,
    },

    texto: {
        type: String,
        required: true,
    },

    autor: {
        type: Number,
        required: true,
    }
});

mongoose.model('Post', PostSchema);