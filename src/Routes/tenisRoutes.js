import express from "express"
import TenisController from "../controller/tenisController.js"

const routes = express.Router()

routes.get("/tenis", TenisController.listarTenis)
routes.get("/tenis/:id", TenisController.listarTenisPorId)
routes.post("/tenis", TenisController.cadastrarTenis)
routes.put("/tenis/:id", TenisController.atualizarTenis)
routes.delete("/tenis/:id", TenisController.deletaTenis)

export default routes
