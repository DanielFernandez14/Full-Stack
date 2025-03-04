import { Link } from "react-router-dom"
import "./Layout.css" 

const Layout = (props) => {
    return (
        <>
        <header>
        <img className="imgHeader" src="Fav Icon.jpeg" alt="Logo" />
            <nav>
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/ApiTest'>ApiTest</Link></li>
                    <li> <Link to='/Contacto'>Contacto</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            {props.children}
        </main>
        <footer className="footer_class">
            <p>Sitio desarrollado por Daniel Fernandez</p>
        </footer>
        </>
    )
}
export { Layout }