import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipCuenta from "./components/TipCuenta"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, addItem, removeItem, tip, setTip } = useOrder()
  
  return (
    <>
      <header className="bg-header">
        <h1>Calculador de Cuenta</h1>
      </header>
      <div className="container-fluid">
        <main className="columnas">
          <div className="p5">
            <h2 className="fw-bold .fs-4">Carta</h2>
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
            <TipCuenta
              setTip={setTip}
            />
            <OrderTotals
            order={order}
            tip={tip}
            />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
