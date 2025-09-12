//importo express
const express = require("express");
//creo variabile router il cui valore è istanza di express.Router()
const router = express.Router();
//importo data
const posts = require("../data/posts");
//importo le funzioni da controller 
const postsController = require("../controllers/postsController")
//anzichè app usiamo router x definire le rotte e rimuoviamo il nome della risorsa dall URI infine esportiamo 

//index con GET
router.get("/", postsController.index);
//create con POST
router.post("/", postsController.create);
//show con GET/:id
router.get("/:id", postsController.show);
//update con PUT/:id
router.put("/:id", postsController.update);
//modify con PATCH/:id
router.patch("/:id", postsController.modify)
//destroy con DELETE/:id
router.delete("/:id", postsController.destroy);

//esporto
module.exports = router

//vado in server.js x importare le rotte

//dopo aver creato controllers ho copiato in controller la logica delle rotte che avevo creato e qui ho importato le funzioni da controller  