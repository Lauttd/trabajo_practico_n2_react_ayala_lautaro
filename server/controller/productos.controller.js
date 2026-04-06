import Productos from "../models/productosmodel.js";

// 1. OBTENER PRODUCTOS (GET)
// Requisito: Listar datos
export const getProductos = async (req, res) => {
    try {
        let lista = await Productos.find(); // Productos es tu modelo importado

        const iniciales = [
    { nombre: "Teclado Mecánico RGB", precio: 85000, categoria: "Periféricos", imagen: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Mouse Gamer Pro", precio: 45000, categoria: "Periféricos", imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Monitor 4K UltraWide", precio: 320000, categoria: "Monitores", imagen: "https://images.unsplash.com/photo-1527443195645-1133e7f28f4a?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Auriculares Studio", precio: 120000, categoria: "Audio", imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Silla Ergonómica Pro", precio: 450000, categoria: "Muebles", imagen: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=500&auto=format&fit=crop" },
    { nombre: "MacBook Pro M3", precio: 2500000, categoria: "Laptops", imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Micrófono Podcast", precio: 180000, categoria: "Audio", imagen: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Cámara Web 4K", precio: 95000, categoria: "Accesorios", imagen: "https://images.unsplash.com/photo-1626125336173-909930773099?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Lámpara de Escritorio", precio: 35000, categoria: "Accesorios", imagen: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Pad Mouse XL", precio: 25000, categoria: "Accesorios", imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Placa RTX 4090", precio: 1800000, categoria: "Hardware", imagen: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Procesador Ryzen 9", precio: 650000, categoria: "Hardware", imagen: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Memoria RAM 32GB", precio: 150000, categoria: "Hardware", imagen: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Gabinete Crystal", precio: 130000, categoria: "Hardware", imagen: "https://images.unsplash.com/photo-1587202377491-9110bceac824?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Fuente 850W Gold", precio: 115000, categoria: "Hardware", imagen: "https://images.unsplash.com/photo-1587202377491-9110bceac824?q=80&w=500&auto=format&fit=crop" },
    { nombre: "iPad Pro M2", precio: 1200000, categoria: "Tablets", imagen: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Router WiFi 6", precio: 75000, categoria: "Redes", imagen: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Apple Watch Ultra", precio: 900000, categoria: "Wearables", imagen: "https://images.unsplash.com/photo-1434493907317-a46b53b81882?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Cooler Líquido RGB", precio: 95000, categoria: "Hardware", imagen: "https://images.unsplash.com/photo-1587202377491-9110bceac824?q=80&w=500&auto=format&fit=crop" },
    { nombre: "Soporte Monitor", precio: 22000, categoria: "Accesorios", imagen: "https://images.unsplash.com/photo-1527443195645-1133e7f28f4a?q=80&w=500&auto=format&fit=crop" }
];

        if (lista.length === 0) {
            console.log("Base de datos vacía. Cargando productos iniciales...");
            await Productos.insertMany(iniciales); // Inserta el arreglo de arriba
            lista = await Productos.find(); // Recupera los datos ya insertados
        }

        res.status(200).json(lista);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener los productos", error });
    }
};

// 2. OBTENER POR ID (GET)
// Requisito: Obtener un elemento por ID
export const getProductosById = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Productos.findById(id);

        if (!producto) {
            return res.status(404).json({ mensaje: "El producto solicitado no existe" });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: "ID inválido o error de servidor", error });
    }
};

// 3. CREAR (POST)
// Requisito: Crear un elemento y validar campos
export const createProductos = async (req, res) => {
    try {
        const { nombre, precio, categoria, imagen } = req.body;

        if (!nombre || !precio || !categoria || !imagen) {
            return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
        }

        const nuevoProducto = new Productos({ nombre, precio, categoria, imagen });
        await nuevoProducto.save();
        
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al guardar el producto", error });
    }
};

// 4. ACTUALIZAR (PUT)
// Requisito: Actualizar un elemento
export const updateProductos = async (req, res) => {
    try {
        const { id } = req.params;
        const productoActualizado = await Productos.findByIdAndUpdate(id, req.body, { new: true });

        if (!productoActualizado) {
            return res.status(404).json({ mensaje: "No se encontró el producto" });
        }
        res.status(200).json(productoActualizado);
    } catch (error) {
        res.status(400).json({ mensaje: "Error al actualizar", error });
    }
};

// 5. ELIMINAR (DELETE)
// Requisito: Eliminar un elemento
export const deleteProductos = async (req, res) => {
    try {
        const { id } = req.params;
        const productoEliminado = await Productos.findByIdAndDelete(id);

        if (!productoEliminado) {
            return res.status(404).json({ mensaje: "ID no encontrado" });
        }
        res.status(204).send(); 
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar", error });
    }
};