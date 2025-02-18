import { Link } from "react-router-dom"
import "./Layout.css" 

const Layout = (props) => {
    return (
        <>
        <header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1175px-Test-Logo.svg.png?20150906031702" alt="Imagen de Logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/PerroAleatorio">Perro Aleatorio</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>
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