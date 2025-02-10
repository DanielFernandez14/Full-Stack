// Estado: una variable que cuando cambia re-renderiza el componente

let clicks = 0

const handleClick = () => {
console.log(clicks)
    // La variable clicks se modifica pero el componente no sabe que tiene que hacer, no sabe que tiene que re-renderizar
    return clicks += 1
}

// 1 -> Creacion de un estado
// 2 -> Modificacion del Estado
// 3 -> En efecto el componente se vuelve a renderizar

const Estado = () => {
    return (
    <>
    <h2>Cantidad de clicks: { clicks }</h2>
    <button onClick={handleClick}>Haz click!</button>
    </>
    )
}

export{ Estado }