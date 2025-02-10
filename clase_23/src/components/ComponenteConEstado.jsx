import { useState } from "react"


// HOOK -> es una funcionalidad existente en react que proporciona una accion en concreto
// .find() -> que encuentra la primer coincidencia dentro de un array

//useState() -> crea un estado para uso interno del componente


const ComponenteConEstado = () => {
    // destructuring de array
    //voy a extraer el estado y la funcion que lo actualiza

    // en el primer lugar el estado (click)
    // en el segundo lugar una funcion que puede modificar al estado (setClick)


    const [click, setClick] = useState(0)
    
    const mensaje = "Insuficiente stock!"

    const producto = {
        nombre: "mochila",
        precio: 2000,
        color: ["negro", "rojo", "amarillo"],
        stock: 16
    }

    // const handleClick = () => {
    //     // cambiar el valor de click
    //     setClick(click + 1)
    // }

    const sumar = () => {
        if (click <= producto.stock) {
            setClick(click + 1)
        }
    } 

    const restar = () => {
        if (click > 0) {
        setClick(click - 1)
        }
    }


    return (
    <>

    <h1>Tienda virtual</h1>
    <p>Producto seleccionado: {producto.nombre} </p>
    <p>Precio: ${producto.precio}</p>
    <ul>
                Colores: 
                {producto.color.map((color, index) => (
                    <li key={index}>{color}</li> // ✅ Se agregó la `key`
                ))}
            </ul>
    {
        click <= producto.stock ? <h2>Cantidad de {producto.nombre}: {click}</h2> : <h2>{mensaje}</h2>
    }
    <button onClick={sumar}>+</button>
    <button onClick={restar}>-</button>
    </>
    )
}

export{ ComponenteConEstado }

//¿Por qué es importante la key?
// React usa key para identificar cada elemento en la lista y optimizar la renderización.
// Si no hay key o todas son iguales, React puede confundirse y volver a renderizar más de lo necesario, afectando el rendimiento.

// Si sigues viendo el error después de agregar key, dime qué código tienes y lo revisamos juntos. 🚀
// Explicación del Fix
// 🔹 key={index} en el .map() evita el error en la consola.
// 🔹 Se corrigió la validación en sumar(): ahora click solo se incrementa si es menor que producto.stock, evitando pasarse del stock.
// 🔹 Código más limpio y sin errores de React. 🚀

// Pruébalo y dime si te funciona o si necesitas otro ajuste. 😊