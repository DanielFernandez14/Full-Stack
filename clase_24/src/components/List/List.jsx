import "./List.css"

const list = () => {

    const colores = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF6", "#FF9933", "#A133FF", "#33FF99", "#FF3357", "#333FFF"];

    const handleFetch = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => setRandomDog(data))
    }


    return(
        <div style={{backgroundColor: colores [3]}}>
            <h2>Mi lista de colores</h2>
            <ul>
                {/* <li></li> */}
                {
                    colores.map((color, index) => (
                        <li className="item-list" style={{ color }}>Color n° {index + 1}</li>
                    ))
                }
                
            </ul>
        </div>
    )
}

export { list };