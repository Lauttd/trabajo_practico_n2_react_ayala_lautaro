import express from 'express';
import cors from 'cors';
import productosRoutes from './routes/productos.routes.js'; // Verificá que el archivo se llame así
import { connectDB } from './config/db.js';

const app = express();

app.use(cors());
app.use(express.json());

// Esta ruta debe coincidir con lo que pidas desde React
app.use('/productos', productosRoutes);

const PORT = 3001;

// Conectamos a la base de datos ANTES de levantar el server para evitar errores
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor de SyntaxTech en http://localhost:${PORT}`);
  });
});