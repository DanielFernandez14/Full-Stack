// un componente no es mas que una funcion que retorna con jsx (html en un sentido mas practico), esta funcion tiene sentido que cambie 
// un estado (es una variable) cuando cambia el valor re renderiza el componente, la computadora vuelve a leer la funcion con los nuevos valores que tenga

import { useState } from "react";
import "./Form.css"
const Form = () => {
const [name, setName] = useState("")
const [color, setColor] = useState()
const [file, setFile] = useState()
const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Enviado!")
    setName("")
}
const handleChange = (event) => {
    setName(event.target.value)
}
const handleChangeColor = (event) => {
    setColor(event.target.value)
}
const handleChangeFile = (event) => {
    // console.log(event.target.value)
    const archivo = event.target.files[0]
    const previewView = URL.createObjectURL(archivo)
    setFile(archivo)
    setPreviewView(previewView)
}
return (
    <form style={{ backgroundColor: color }} onSubmit={handleSubmit}>
    <h2></h2>
    <label>Nombre:</label>
    <input
        type="text"
        name="name"
        required
        onChange={handleChange}
        value={name}
        autoComplete="off"
        placeholder="Ingrese su nombre"
    />
    <label>Elige un color:</label>
    <input
        type="color"
        name="color"
        required
        onChange={handleChangeColor}
        value={color}
    />
    <input
        type="file"
        name="file"
        required
        onChange={handleChangeFile}
        value={file}
    />
    <button>Enviar</button>
    </form>
    )
}
export { Form }


// import { useState } from "react"; // nos da el estado y se reasigna un nuevo valor con una funcion
// import "./Form.css"

// const Form = () => {
//     const [name, setName] = useState("Daniel")
//     let valueName;

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         console.log("Enviado!")
//         setName("")
//     }
//     const handleChange = (event) => {
        
//         console.log(event.target.value) // accedemos al valor final
//         console.log(valueName)
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>El valor del nombre es: {valueName}</h2>
//             <label>Nombre:</label>
//             <input 
//             type="text" 
//             name="name" 
//             required onChange={handleChange}
//             value={name}/>
//             <button>Enviar</button>
//         </form>
//     )
// }

// export {Form}

