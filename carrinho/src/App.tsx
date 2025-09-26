import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { Cart } from './pages/cart'

import { Layout } from './components/layout'
import { Product } from './pages/product'


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
       {
        path: "/product/:id",
        element: <Product/>
      },
    ]
  }
])

export { router };