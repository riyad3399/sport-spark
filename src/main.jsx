import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/Routes'
import Container from './Components/shared/Container'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={route}/>
    </HelmetProvider>
     </AuthProvider>
   </Container>
  </React.StrictMode>,
)
