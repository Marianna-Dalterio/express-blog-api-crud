const express = require("express")
const app = express()
const port = 3000
//importo il file che contiene le rotte
const postsRouter = require("./router/postsRoutes")
//con funxione USE indico a express di attaccare le rotte all'app principale
app.use("/api/posts", postsRouter)
//asset statici 
app.use(express.static("public"));
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


