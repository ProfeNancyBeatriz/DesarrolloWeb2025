//aurocomplete con rfc -->luego borro el import
import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void; 
}
export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <>
      <button className="mybutton"
      onClick={() => addItem(item) }>
        <p>{item.name}</p>
        <p className="precio">${item.price}</p>
      </button>
    </>
  )
}
