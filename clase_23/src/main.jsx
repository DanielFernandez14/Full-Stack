import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Saludo } from './components/Saludo'
import { Estado } from './components/ComponenteSinEstado'
import { ComponenteConEstado } from './components/ComponenteConEstado'
import { Popup } from './components/Popup'
import { Formulario } from './components/Formulario'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Saludo nombre="Maximo"/>
    <Saludo nombre="Jose"/>
    <Saludo nombre="Pepe"/> */}
    {/* <ComponenteSinEstado/> */}
    {/* <ComponenteConEstado/> */}
    {/* <Popup/> */}
    <Formulario></Formulario>
  </StrictMode>,
)
