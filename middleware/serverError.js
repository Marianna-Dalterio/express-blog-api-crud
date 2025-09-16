//Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.
function serverError(err, req, res, next) {
    res.status(500);
    res.json({
        error: true,
        message: err.message,
        stack: err.stack //dà lista di errori 
    })
}

module.exports = serverError