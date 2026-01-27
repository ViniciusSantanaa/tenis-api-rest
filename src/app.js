import express from "express"
import conectarNaData from "./config/dbConnect.js"
import routes from "./Routes/tenisRoutes.js"

const app = express()

app.use(express.json())

app.use(routes)

const conexao = await conectarNaData()

conexao.on("error", (erro) => {
    console.log("Falha ao conectar no banco de dados! ", erro)
})

conexao.once("connected", () => {
    console.log("Banco conectado com sucesso!")
})

app.get("/", (req, res) => {
    res.status(200).send("Estou conseguindo")
})


export default app