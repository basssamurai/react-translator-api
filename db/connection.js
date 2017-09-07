const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/react_translator_db')

module.exports = mongoose
