import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import SelectCategory from './pages/SelectCategory.jsx'

import Entertainment from './pages/Entertainment.jsx'

import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from './pages/SignUp.jsx'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <App/>,
      children:
      [
        {
          path:"signup",
          element:<SignUp/>
        },
        {
          path:"homepage",
          element:<Homepage/>
        },
        {
          path:"selectcategory",
          element:<SelectCategory/>,
        },
        {
          path:"entertainment",
          element:<Entertainment/>,
        },
      ]
    },
    
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
