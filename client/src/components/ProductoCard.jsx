import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
import axios from "axios";

function ProductoCard({ producto }) {
  const { dispatch } = useContext(ProductosContext);

  const eliminarMe = async () => {
    if (window.confirm(`¿Borrar  ${producto.nombre}? `))
    try {
      await axios.delete(
        `http://localhost:3001/productos/${producto._id}`,
      );

      dispatch({ type: "DELETE_PRODUCT", payload: producto._id });
    } catch (error) {
      console.error("No se pudo borrar");
    }
  };
  return (
    <div className="card">
      <h3> {producto.nombre} </h3>
      <p>
        {producto.categoria} - {producto.precio}
      </p>
      <button onClick={eliminarMe}> Eliminar </button>
    </div>
  );
}

export default ProductoCard
