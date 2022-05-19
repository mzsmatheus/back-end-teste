const mongoose = require('mongoose');

const produtoSchema = mongoose.Schema({

nome: String,
desc: String,
preco: Number

});

module.exports = mongoose.model('produto', produtoSchema);