const express = require("express"); // pacotes a serem utilizados
const router = express.Router();
const dbKnex = require("./data/db_config"); // dados de conexão com o banco de dados
const knex = require("knex");
const cors = require("cors")
router.use(cors())


// método get é usado para consulta
router.get("/", async (req, res) => {
    try {
        // para obter os livros pode-se utilizar .select().orderBy() ou apenas .orderBy()
        const livros = await dbKnex("livros").orderBy("id", "desc");
        res.status(200).json(livros); // retorna statusCode ok e os dados
    } catch (error) {
        res.status(400).json({ msg: error.message }); // retorna status de erro e msg
    }
});
router.get("/:id", async(req, res) => {
    const id = req.params.id;

    try{
        const livros = await dbKnex("livros").where({id})
        res.status(200).json(livros);
    }catch (error){
        res.status(400).json({msg: error.message});
    }
})

// Método post é usado para inclusão
router.post("/", async (req, res) => {
    // faz a desestruturação dos dados recebidos no corpo da requisição
    const { titulo, autor, ano, preco, foto } = req.body;

    // se algum dos campos não foi passado, irá enviar uma mensagem de erro e retornar
    if (!titulo || !autor || !ano || !preco || !foto) {
        res.status(400).json({ msg: "Enviar titulo, autor, ano, preco e foto do livro" });
        return;
    }

    // caso ocorra algum erro na inclusão, o programa irá capturar (catch) o erro
    try {
        // insert, faz a inserção na tabela livros (e retorna o id do registro inserido)
        const novo = await dbKnex("livros").insert({ titulo, autor, ano, preco, foto });
        res.status(201).json({ id: novo[0] }); // statusCode indica Create
    } catch (error) {
        res.status(400).json({ msg: error.message }); // retorna status de erro e msg
    }
});

// Método put é usado para alteração. id indica o registro a ser alterado
router.put("/:id", async (req, res) => {
    const id = req.params.id; // ou const { id } = req.params
    const { preco } = req.body; // campo a ser alterado
    try {
        // altera o campo preco, no registro cujo id coincidir com o parâmetro passado
        await dbKnex("livros").update({ preco }).where("id", id); // ou .where({ id })
        res.status(200).json(); // statusCode indica Ok
    } catch (error) {
        res.status(400).json({ msg: error.message }); // retorna status de erro e msg
    }
});

// Método delete é usado para exclusão
router.delete("/:id", async (req, res) => {
    const { id } = req.params; // id do registro a ser excluído
    try {
        await dbKnex("livros").del().where({ id });
        res.status(200).json(); // statusCode indica Ok
    } catch (error) {
        res.status(400).json({ msg: error.message }); // retorna status de erro e msg
    }
});

router.get("/filtros/:palavra", async (req, res) => {
    const palavra = req.params.palavra;
    
    try{
        const livros = await dbKnex("livros")
        .where("titulo", "like", `%${palavra}%`)
        .orWhere("autor", "like", `%${palavra}%`);

        res.status(200).json(livros);
    }catch (error) {
        res.status(400).json({msg: error.message});
    }
});

router.get("/dados/resumo", async (req, res) => {
    try{
        const consulta = await dbKnex("livros")
        .count({num: "*"})
        .sum({soma: "preco"})
        .max({maior: "preco"})
        .avg({media: "preco"})

        const {num, soma, maior, media} = consulta[0]
        res.status(200).json({num, soma, maior, media:Number(media.toFixed(2))});

    }catch (error){
        res.status(400).json({msg: error.message})
    }
    
})

router.get("/dados/grafico", async (req, res) => {
    try {
        const totalPorAno = await dbKnex("livros").select("ano").sum({total: "preco"}).groupBy("ano");
        res.status(200).json({totalPorAno})
    }catch (error){
        res.status(400).json({msg: error.message})
    }
})


module.exports = router;
