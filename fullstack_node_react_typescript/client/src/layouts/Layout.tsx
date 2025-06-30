import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
    <header>
        <div>
            <h1>Administrador de Productos</h1>
        </div>
    </header>
    <main>
        <Outlet />
    </main>
    </>
    
  )
}
