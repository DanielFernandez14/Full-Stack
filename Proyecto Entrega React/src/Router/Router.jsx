import { BrowserRouter, Routes ,Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { ApiTest } from "../pages/ApiTest/ApiTest"
import { Contacto } from "../pages/Contacto/Contacto"

const Router = () => {
    return (
        <BrowserRouter>
            
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/ApiTest' element={<ApiTest/>} />
                    <Route path='/Contacto' element={<Contacto/>} />
                </Routes>
            
        </BrowserRouter>
    );
};

export { Router }