import { useState, useContext } from "react";
import axios from "axios";
import { ProductosContext } from "../context/ProductosContext";

function ProductoForm() { 
  const { dispatch } = useContext(ProductosContext); // Corregido dispatch

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState(""); // Agregado el estado para imagen

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const nuevoObjeto = { nombre, precio, categoria, imagen };

      const res = await axios.post(
        "http://localhost:3001/productos",
        nuevoObjeto
      );

      // Corregido a ADD_PRODUCT (singular) para que coincida con el reducer
      dispatch({
        type: "ADD_PRODUCT",
        payload: res.data,
      });

      // Limpiar estados
      setNombre("");
      setPrecio("");
      setCategoria("");
      setImagen("");

      alert("Producto agregado a SyntaxTech");
    } catch (error) {
      console.error("Error al crear el producto", error);
    }
  }; // AQUÍ CIERRA handleSubmit

  // El return va fuera de handleSubmit, pero dentro de ProductoForm
  return (
    <form className="producto-form" onSubmit={handleSubmit}>
      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        placeholder="Precio"
        type="number"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />
      <input
        placeholder="Categoría"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        required
      />
      <input
        placeholder="URL Imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default ProductoForm;