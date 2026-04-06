import { useState } from 'react';
import axios from 'axios';

export default function ProductoForm({ onProductoCreado }) {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/productos', { nombre, precio, categoria, imagen });
      alert("¡Producto de SyntaxTech agregado!");
      setNombre(''); setPrecio(''); setCategoria(''); setImagen('');
      onProductoCreado(); // Refresca la lista en App.jsx
    } catch (err) {
      alert("Error al cargar el producto");
    }
  };

  return (
    <form className="producto-form" onSubmit={handleSubmit}>
      <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
      <input placeholder="Precio" type="number" value={precio} onChange={e => setPrecio(e.target.value)} required />
      <input placeholder="Categoría" value={categoria} onChange={e => setCategoria(e.target.value)} required />
      <input placeholder="URL Imagen" value={imagen} onChange={e => setImagen(e.target.value)} required />
      <button type="submit">Agregar</button>
    </form>
  );
}