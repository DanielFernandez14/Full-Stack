import { useState } from "react"

const Popup = () => {
    const [mostrar, setMostrar] = useState(false)

const handleMostrar = () => {
    setMostrar(true)
}
const handleOcultar = () => {
    setMostrar(false)
}


    return (
        <>
        
        <h1>UTN - Clases de Estados</h1>
        <button onClick={handleMostrar}>Abrir popup</button>
        {
            mostrar === true && <div className="popup">
                <button className="cerrar" onClick={handleOcultar}></button>
                <h2>Suscribirse a nuestro newletter!</h2>
                <button>Suscribirse</button>
            </div>
        }
        </>
    )
}

export { Popup }