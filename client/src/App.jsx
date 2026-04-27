import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ProductoCard from './components/ProductoCard';
import ProductoForm from './components/ProductoForm';
import './App.css';
import { ProductosContext } from './context/ProductosContext';

function App() {
  const { state, dispatch } = useContext(ProductosContext);
  const { productos } = state; 

  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);

  const cargarProductosGlobal = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/productos');
      // Enviamos los datos al estado global [cite: 885-888]
      dispatch({ type: 'SET_PRODUCTS', payload: res.data });
    } catch (err) {
      console.error("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { cargarProductosGlobal(); }, []);

  const filtrados = productos.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Inventario de SyntaxTech</h1>
      
      {/* Componente para agregar productos */}
      <ProductoForm />

      {/* Buscador */}
      <input 
        className='search-bar'
        placeholder='Buscar por nombre o categoria...'
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {loading && <h2>Cargando...</h2>}

      {/* Lista de productos: ¡No te olvides de esta parte! */}
      <div className="productos-grid">
        {filtrados.map(p => (
          <ProductoCard key={p._id} producto={p} />
        ))}
      </div>
    </div>
  );
}

export default App;