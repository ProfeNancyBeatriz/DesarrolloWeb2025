import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"

function App() {
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
                />
              ))}
            </div>
          </div>
          <div className="p5">
            <h2>Consumo</h2>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
