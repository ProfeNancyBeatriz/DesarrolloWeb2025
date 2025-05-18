import { useMemo } from "react"
import { OrderItem } from "../types"

type OrderTotalsProps = {
    order : OrderItem[],
    tip: number
}
export default function OrderTotals({order, tip} : OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price),0), [order])
    //se debe levantar el cambio si decido cambiar el porcentaje de la propina, pero también cada
    //vez que se altere el pedido
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

  return (
    <>
        <div className="space">
            <h2 className='fw-bold .fs-3'>Totales y Propina</h2>
            <p>Subtotal a pagar: {'  '}
                <span className="fw-bold">${subtotalAmount}</span>
            </p>
            <p>Propina: {'  '}
                <span className="fw-bold">${tipAmount}</span>
            </p>
            <p>Total a pagar: {'  '}
                <span className="fw-bold">${totalAmount}</span>
            </p>
        </div>
    
    </>
  )
}
