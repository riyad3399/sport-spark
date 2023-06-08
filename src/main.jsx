import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/Routes'
import Container from './Components/shared/Container'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
    <RouterProvider router={route}/>
   </Container>
  </React.StrictMode>,
)
