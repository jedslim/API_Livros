import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {  
    id: {type: String},
    titulo: {type: String, require: true},
    autor: {type: mongoose.Schema.Types.ObjectId, ref:'autores', require: true},
    numeroPaginas: {type: Number}
    }
);


const livros = mongoose.model('livros', livroSchema);

export default livros;