import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home.jsx"
import { RyMAleatorio } from "../pages/RyMAleatorio/RyMAleatorio.jsx"
import { Contacto } from "../pages/Contacto/Contacto.jsx"



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/RyMAleatorio" element={<RyMAleatorio/>}/>
                <Route path="/Contacto" element={<Contacto/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export { Router }







