import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {
  const { order, addItem, removeItem } = useOrder()
  return (
    <>
      <header className="bg-header">
      <h1>Calculadora de Cuenta</h1>
      </header>
      <div className="container-fluid">
        <main className="columnas">
          <div className="p5">
            <h2>Carta</h2>
            <div className="space">
              {menuItems.map(item => (
                <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
              ))}
            </div>
          </div>
          <div className="borde p5">
            <OrderContents
            order={order}
            removeItem={removeItem}
            />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
