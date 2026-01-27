import mongoose from "mongoose"

async function conectarNaData() {
    mongoose.connect(process.env.STRING_DATABASE)

    return mongoose.connection
}

export default conectarNaData