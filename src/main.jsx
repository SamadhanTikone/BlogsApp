import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import ContactUs from './Components/ContactUs.jsx'

const router = createBrowserRouter([
  {
  path:"/",
  element : <Layout/>,
  children:[
    {
      path:"",
      element:<Home/>

    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:"/contact",
      element:<ContactUs/>
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}/>
  </StrictMode>,
)
