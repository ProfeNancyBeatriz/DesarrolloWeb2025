import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
}
export default function MenuItem({ item }: MenuItemProps) {
    return (
        <>
            <button className="mybutton">
                <p>{item.name}</p>
                <p className="precio">${item.price}</p>
            </button>

        </>
    )
}
