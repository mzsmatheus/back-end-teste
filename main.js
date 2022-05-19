//npm install npm start      localhost:3000
require('./db/mongodb');
const express = require("express");
const morgan = require("morgan");
const servidor = express();

servidor.use(morgan('dev'));
servidor.use(express.urlencoded({'extended': true}));
servidor.use(express.json());

function get(req, res){

    res.send('Servidor Express (GET)...');
}

// function getProdutos(req, res){

//     res.json(produtos);
// }


servidor.get('/', get);
// servidor.get('/produtos', getProdutos);
servidor.get('/produtos', async (req, res) => {
    var produtos = await produtoModel.find({});
     res.json(produtos);
});



function log(){
console.log('Servidor Express rodando na porta 3000...');}

servidor.listen(3000, log);


const produtoModel = require('./models/produtoModel');

// var produto = {

//     'nome': 'Snortphone',
//     'desc': 'iphon',
//     'preco': 4000000

// };

// async function gravarDados(){

// var resultado = await produtoModel.create(produto);
// console.log(resultado);

// }
// gravarDados();