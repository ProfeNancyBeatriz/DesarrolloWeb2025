import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item : MenuItem) => void;
}
export default function MenuItem({ item, addItem }: MenuItemProps) {
    return (
        <>
            <button 
                onClick={() => addItem(item)} 
            className="mybutton">
                <p>{item.name}</p>
                <p className="precio">${item.price}</p>
            </button>

        </>
    )
}
