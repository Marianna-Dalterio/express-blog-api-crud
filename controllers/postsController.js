const posts = require("../data/posts")
// scrivo la logica delle rotte sotto forma di variabile che poi esporto
const index = (req, res) => {
    res.json(posts)
};
const create = (req, res) => {
    // res.send("Creazione nuovo post")
    //creo nuovo id
    const newId = posts[posts.length - 1].id + 1;
    //creo nuovo oggetto post
    const newPost = {
        id: newId,
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        immagine: req.body.immagine,
        tags: req.body.tags

    }
    //aggiungo il nouovo post alla lista
    posts.push(newPost);
    //controllo
    console.log(posts);
    //restituisco lo sttau scorretto e la pizza 
    res.status(201);
    res.json(newPost);
};
const show = (req, res) => {
    // res.send("Dettagli della pizza" + req.params.id)
    const id = req.params.id;
    const post = posts.find(item => item.id === parseInt(id));
    if (!post) {
        return res.status(404).json({
            error: "Not found"
        })
    }
    res.send(post);
};
const update = (req, res) => {
    // res.send("Update a single post with ID:" + req.params.id)
    //recupero id del post
    const id = parseInt(req.params.id);
    //uso find per recuperare post
    const post = posts.find(post => post.id === id);
    //controllo che quel post esiste
    if (!post) {
        res.status(404);
        return res.json({
            error: "not found",
            message: "post not found"
        })
    }
    //aggiorno il post
    post.titolo = req.body.titolo;
    post.contenuto = req.body.contenuto;
    post.immagine = req.body.immagine;
    post.tags = req.body.tags;
    //controllo lista di post
    console.log(posts);
    //restituisco post aggiornato
    res.json(posts)
};
const modify = (req, res) => {
    res.send("Partial update of a single post with ID:" + req.params.id)
};
const destroy = (req, res) => {
    // res.send("Delete the single post with ID:" + req.params.id)
    const id = parseInt(req.params.id);
    const post = posts.find(item => item.id === id);
    if (!post) {
        res.status(404);
        return res.json({
            status: "404",
            error: "Not found",
            message: "Pizza non trovata"
        })
    }
    posts.splice(posts.indexOf(post), 1);
    res.sendStatus(204);
};


//esporto le funzioni
module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}