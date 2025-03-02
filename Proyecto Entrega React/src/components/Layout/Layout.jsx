import "./Layout.css"

const Layout = (props) => {
    return (
        <>
            <header>
                <img className="imgHeader" src="Fav Icon.jpeg" alt="Logo" />
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="./perro-aleatorio">Proyectos</a></li>
                        <li><a href="./contacto">Contacto</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                {props.children}
            </main>
            <footer>Sitio desarrollado por Danco Web</footer>
        </>
    )
}
export { Layout }