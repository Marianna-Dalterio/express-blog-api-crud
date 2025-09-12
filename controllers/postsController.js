const posts = require("../data/posts")
// scrivo la logica delle rotte sotto forma di variabile che poi esporto
const index = (req, res) => {
    res.json(posts)
};
const create = (req, res) => {
    res.send("Creazione nuovo post")
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
    res.send("Update a single post with ID:" + req.params.id)
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