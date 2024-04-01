import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './components/Home/Home.jsx'
import Root from './components/Root/Root.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
