import "./Layout.css" 

const Layout = (props) => {
    return (
        <>
        <header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1175px-Test-Logo.svg.png?20150906031702" alt="Imagen de Logo" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li> <a href="./PerroAleatorio">Perro Aleatorio</a></li>
                    <li><a href="./Contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
        <main>
            {props.children}
        </main>
        <footer>
            <p>Sitio desarrollado por Daniel Fernandez</p>
        </footer>
        </>
    )
}
export { Layout }