import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const[order, setOrder] = useState<OrderItem[]>([])
    const addItem = (item : MenuItem) => {
        //verifico si la selección ya existe en la colección
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if (itemExist) {
          //voy a sacar el id del que existe y lo haré con un ternario
          const updateOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem )
          setOrder(updateOrder)
        }else{
          const newItem={...item, quantity : 1}
          setOrder([...order,newItem])
        }    
    }
    const removeItem = (id: MenuItem['id'])=>{
        //console.log('Eliminando..',id)
        setOrder(order.filter( item => item.id !== id))
    }
    
  return {
    addItem,
    order,
    removeItem,
  }
}
