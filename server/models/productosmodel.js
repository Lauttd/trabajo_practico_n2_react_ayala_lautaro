import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true }, // Campo obligatorio [cite: 46]
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    imagen: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Producto', productoSchema);