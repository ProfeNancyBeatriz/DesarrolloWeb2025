import { Link } from "react-router-dom";

export default function NewProduct() {
  return (
        <>
    <div>
      <h2>Productos</h2>
      <Link
      to="/"
      >
        Volver
      </Link>
    </div>
    <form>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Nombre Producto</label>
    <input type="text" className="form-control" id="name" />    
  </div>
  <div className="mb-3">
    <label htmlFor="price" className="form-label">Precio Producto</label>
    <input type="number" className="form-control" id="price" />    
  </div>
  <button type="submit" className="btn btn-primary mt-3">Registrar Producto</button>
</form>
    </>
  )
}
