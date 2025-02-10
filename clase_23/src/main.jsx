import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Saludo } from './components/Saludo'
import { Estado } from './components/ComponenteSinEstado'
import { ComponenteConEstado } from './components/ComponenteConEstado'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Saludo nombre="Maximo"/>
    <Saludo nombre="Jose"/>
    <Saludo nombre="Pepe"/> */}
    {/* <ComponenteSinEstado/> */}
    <ComponenteConEstado/>
  </StrictMode>,
)
