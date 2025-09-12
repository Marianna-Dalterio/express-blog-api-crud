const posts = require("../data/posts")
// scrivo la logica delle rotte sotto forma di variabile che poi esporto
const index = ("/", (req, res) => {
    res.json(posts)
});
const create = ("/", (req, res) => {
    console.log("Creazione nuovo post")
});
const show = ("/:id", (req, res) => {
    console.log("Dettagli della pizza" + req.params.id)
});
const update = ("/:id", (req, res) => {
    console.log("Update a single post with ID:" + req.params.id)
});
const modify = ("/:id", (req, res) => {
    console.log("Partial update of a single post with ID:" + req.params.id)
});
const destroy = ("/:id", (req, res) => {
    console.log("Delete the single post with ID:" + req.params.id)
});


//esporto le funzioni
module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}