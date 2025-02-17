import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Form } from "./components/formulario/form"
import './index.css'
import { List } from './components/List/List'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List />
  </StrictMode>
)
