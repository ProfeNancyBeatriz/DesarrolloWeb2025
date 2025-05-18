import {MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}
export default function OrderContents({ order, removeItem }: OrderContentsProps) {
    return (
        <div>
            <h2 className='fw-bold .fs-4'>Consumo</h2>
            <div className="space mt-5">
                {order.length === 0 ?
                    <p className="text-center">La orden está vacía</p>
                    : (
                        order.map(item => (
                            <div key={item.id} className="precuenta border border-success p-2 mb-2 border-opacity-25" >
                                <div>
                                    <p className=".fs-2">
                                        {item.name} - ${item.price}
                                    </p>
                                    <p className="fw-bold">
                                        Cantidad: {item.quantity} - ${item.price * item.quantity}
                                    </p>
                                </div>
                                <button
                                 className="btnDelete"
                                 onClick={() => removeItem(item.id)}
                                >
                                    X
                                </button>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}
