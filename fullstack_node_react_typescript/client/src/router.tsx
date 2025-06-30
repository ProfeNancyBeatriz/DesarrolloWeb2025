import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import Product from "./views/Product"
import NewProduct from "./views/NewProduct"
import EditProduct from "./views/EditProduct"

export const router = createBrowserRouter([
    {
       path: '/',
       element: <Layout />,
       children: [
        {
            index: true,
            element: <Product />
        },
        {
            path: 'productos/nuevo',
            element: <NewProduct />
        },
        {
            path: 'productos/:id/editar',
            element: <EditProduct />
        }
       ] 
    }
])


