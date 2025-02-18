import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../Pages/Home/Home"
import { PerroAleatorio } from "../Pages/PerroAleatorio/PerroAleatorio" 
import { Contacto } from "../Pages/Contacto/Contacto"

// "/" -> Home
// "/PerroAleatorio" -> PerroAleatorio
// "/Contacto" -> Contacto

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Para cada ruta defino el path y la vista */}


                <Route path="/" element={<Home/>} />
                <Route path="/PerroAleatorio" element = {<PerroAleatorio/>} />
                <Route path="/Contacto" element = {<Contacto/>} />
            </Routes>
        </BrowserRouter>
    )
}

export { Router }