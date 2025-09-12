//importo express
const express = require("express");
//creo variabile router il cui valore è istanza di express.Router()
const router = express.Router();
//importo data
const posts = require("../data/posts");


//anzichè app usiamo router x definire le rotte e rimuoviamo il nome della risorsa dall URI infine esportiamo 

//index con GET
router.get("/", (req, res) => {
    res.json(posts)
});
//create con POST
router.post("/", (req, res) => {
    console.log("Creazione nuovo post")
});
//show con GET/:id
router.get("/:id", (req, res) => {
    console.log("Dettagli della pizza" + req.params.id)
});
//update con PUT/:id
router.put("/:id", (req, res) => {
    console.log("Update a single post with ID:" + req.params.id)
});
//modify con PATCH/:id
router.patch("/:id", (req, res) => {
    console.log("Partial update of a single post with ID:" + req.params.id)
});
//destroy con DELETE/:id
router.delete("/:id", (req, res) => {
    console.log("Delete the single post with ID:" + req.params.id)
});

//esporto
module.exports = router

//vado in server.js x importare le rotte