import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Merch from './Components/Merch.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element: <App/>,
    children: [{
      path:"",
      element: <Home/>
    },
    {
      path: "Merch",
      element: <Merch/>
    }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
