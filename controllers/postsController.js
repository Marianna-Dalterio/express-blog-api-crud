const posts = require("../data/posts")
// scrivo la logica delle rotte sotto forma di variabile che poi esporto
const index = (req, res) => {
    res.json(posts)
};
const create = (req, res) => {
    res.send("Creazione nuovo post")
};
const show = (req, res) => {
    res.send("Dettagli della pizza" + req.params.id)
};
const update = (req, res) => {
    res.send("Update a single post with ID:" + req.params.id)
};
const modify = (req, res) => {
    res.send("Partial update of a single post with ID:" + req.params.id)
};
const destroy = (req, res) => {
    res.send("Delete the single post with ID:" + req.params.id)
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