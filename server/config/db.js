import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        // Reemplazá con tu URI de MongoDB Atlas o Local
        await mongoose.connect('mongodb://localhost:27017');
        console.log("Conectado a MongoDB - SyntaxTech");
    } catch (error) {
        console.error("Error de conexión:", error);
        process.exit(1); // Detiene la app si falla la BD
    }
}; 
