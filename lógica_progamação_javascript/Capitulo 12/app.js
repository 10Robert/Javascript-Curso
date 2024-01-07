const express = require("express");
const app = express();
const port = 3001;


app.get("/", (req, res) =>{
    res.send('<h1>Bem vindo!<h2> <a href="http://localhost:3001/cap12">CLICK</a>')
});



app.get('/cap12', (req, res) =>{
    res.send('<h2>Capítulo 12:Introdução ao Express</h1>');
});


app.post('/filmes', (req, res) => {
    //const titulo = req.body.titulo
    //const genero = req.body.genero
    const {titulo, genero} = req.body
    res.send(`Filme: ${titulo} - Gênero:${genero}, recebido...`);
})

const log = (req, res, next) =>{
    console.log(`........ Acessando em ${new Date()}`)
    next()
}

app.get('/transfere', log, (req, res) => {
    res.send("Ok! Valor transferido com sucesso...");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})

app.use(express.json());

const livros = require('./livros');
app.use('/livros', livros); // identificação da rota e da const (require) associada

