import { Router } from 'express';
// Importamos cada función del controlador que creamos recién
import { 
    getProductos,  
    createProductos, 
    updateProductos, 
    deleteProductos, 
    getProductosById
} from '../controller/productos.controller.js';

const router = Router();

// Definición de las rutas (Endpoints)

// 1. Listar todos los productos (GET) [cite: 40]
router.get('/', getProductos);

// 2. Obtener un producto específico por su ID (GET) [cite: 41]
router.get('/:id', getProductosById);

// 3. Crear un nuevo producto (POST) [cite: 42]
router.post('/', createProductos);

// 4. Actualizar un producto existente (PUT) [cite: 43]
router.put('/:id', updateProductos);

// 5. Eliminar un producto (DELETE) [cite: 44]
router.delete('/:id', deleteProductos);

export default router;