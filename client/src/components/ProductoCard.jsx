export default function ProductoCard({ producto, onDelete }) {
  return (
    <div className="producto-card">
      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        onError={(e) => { e.target.src = 'https://placehold.co/400x400?text=SyntaxTech'; }}
      />
      <div className="card-body">
        <h3>{producto.nombre}</h3>
        <p className="categoria">{producto.categoria}</p>
        <p className="precio">${producto.precio}</p>
        <button className="btn-eliminar" onClick={() => onDelete(producto._id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
}