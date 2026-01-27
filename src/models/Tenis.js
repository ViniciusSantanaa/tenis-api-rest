import mongoose from "mongoose"

const tenisSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    modelo: { type: String, required: true },
    tamanho: { type: Number },
    cor: { type: String },
    preco: { type: Number, required: true }
}, {versionKey : false })

const Tenis = mongoose.model("tenis", tenisSchema)

export default Tenis