import type { CartActions } from "../reducers/cart-reducer"
import type { Audifono } from "../types/types"

type AudifonoProps = {
  audifono : Audifono,
  dispatch: React.Dispatch<CartActions>
}
export default function Audifono({audifono, dispatch} : AudifonoProps){
    console.log(audifono)
    const { name, image, description, price} = audifono
    return(
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src={`/img/${image}.webp`} alt="imagen audífono" />
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
              <p>{description}</p>
              <p className="fw-black text-primary fs-3">${price}</p>
              <button
                type="button"
                className="btn btn-dark w-100"
                onClick={() => dispatch({type: 'add-to cart',payload: {item: audifono}})}
              >Agregar al Carrito</button>
            </div>
          </div>
    )
}