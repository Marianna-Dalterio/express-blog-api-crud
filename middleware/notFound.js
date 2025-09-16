//Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.

function notFound(req, res, next) {
    res.status(404);
    res.json({
        error: true,
        message: "Endpoint not found"
    })
}

module.exports = notFound