import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductoCard from './components/ProductoCard';
import ProductoForm from './components/ProductoForm';
import './App.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);

  const traerProductos = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/productos');
      setProductos(res.data);
    } catch (err) {
      console.error("Error de servidor");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { traerProductos(); }, []);

  const eliminarProducto = async (id) => {
    if (window.confirm("¿Eliminar este producto?")) {
      await axios.delete(`http://localhost:3001/productos/${id}`);
      traerProductos();
    }
  };

  const filtrados = productos.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Inventario SyntaxTech</h1>
      
      {/* Requisito: Formulario de creación */}
      <ProductoForm onProductoCreado={traerProductos} />

      {/* Requisito: Filtro o búsqueda */}
      <input 
        className="search-bar"
        placeholder="🔍 Buscar por nombre o categoría..." 
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {loading && <h2>Cargando...</h2>}

      <div className="productos-grid">
        {filtrados.map(p => (
          <ProductoCard key={p._id} producto={p} onDelete={eliminarProducto} />
        ))}
      </div>
    </div>
  );
}

export default App;