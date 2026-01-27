import Tenis from "../models/Tenis.js"

class TenisController {

    static async listarTenis(req, res) {
        try{
            const tenis = await Tenis.find()
            res.status(200).json(tenis)
        } catch (e) {
            res.status(500).json({ message : `Falha ao listar os tênis - ${e.message}` })
        }
    }

    static async listarTenisPorId(req, res) {
        try{    
            const id = req.params.id
            const tenisPorId = await Tenis.findById(id)
            res.status(200).json(tenisPorId)
        } catch (e) {
            res.status(500).json({ message: `Falha ao listar o tênis - ${e.message}` })
        }     
    }

    static async cadastrarTenis(req, res) {
        try{
            const novoTenis = await Tenis.create(req.body)
            res.status(201).json( { message : "Tênis cadastrado com sucesso!", tenis : novoTenis })
        } catch (e) {
            res.status(500).json({ message : `Falha ao cadastrar o tênis - ${e.message}` })
        }
    }

    static async atualizarTenis(req, res) {
        try{
            const id = req.params.id
            const tenisAtualizado = await Tenis.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message : `Tênis atualizado com sucesso`, tenis: tenisAtualizado })
        } catch (e) {
            res.status(500).json({ message : `Falha ao atualizar tênis - ${e.message}` })
        }
    }

    static async deletaTenis(req, res) {
        try{
            const id = req.params.id
            await Tenis.findByIdAndDelete(id)
            res.status(200).json({ message: "Tênis deletado com sucesso" })
        } catch (e) {
            res.status(500).json({ message : `Falha ao deletar ${e.message}` })
        }
    }

}

export default TenisController
