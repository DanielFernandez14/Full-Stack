import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.jsx'
import { Layout } from './components/Layout/Layout.jsx'
import { Home } from './pages/Home/Home.jsx'
import { Contacto } from './pages/Contacto/Contacto.jsx'
import { RyMAleatorio } from './pages/RyMAleatorio/RyMAleatorio.jsx'
import { Router } from './Router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
