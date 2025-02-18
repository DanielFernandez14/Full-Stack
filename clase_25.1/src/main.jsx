import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.jsx'
import { Layout } from './components/Layout/Layout.jsx'
import { Home } from './Pages/Home/Home.jsx'
import { PerroAleatorio } from './Pages/PerroAleatorio/PerroAleatorio.jsx'
import { Contacto } from './Pages/Contacto/Contacto.jsx'
import { Router } from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
