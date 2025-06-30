import { Link } from "react-router-dom";

export default function Product() {
  return (
    <>
    <div>
      <h2>Productos</h2>
      <Link
      to="productos/nuevo"
      >
        Agregar Producto
      </Link>
    </div>
    </>
  )
}
